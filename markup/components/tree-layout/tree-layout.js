
import * as d3 from 'd3';

const height = 800;
const width = 1000;
const duration = 750;
let i = 0;
let radius = 50;

d3.json('static/json/names.json', (err, data) => {
    if (err) {
        throw new Error(err);
    }
    treeLayoutInit(data);
});


function treeLayoutInit(data) {
    const canvas = d3.select('.tree-layout .l-restrictor')
        .append('svg')
        .attr('height', height)
        .attr('width', width)
        .append('g')
        .attr('transform', 'translate(100, 50)');

    let treemap = d3.tree().size([height, width]);

    let root = d3.hierarchy(data, function (d) {
        return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    root.children.forEach(collapse);

    update(root);

    // Collapse the node and all it's children
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function update(source) {

        // Assigns the x and y position for the nodes
        let treeData = treemap(root);

        // Compute the new tree layout.
        let nodes = treeData.descendants();
        let links = treeData.descendants().slice(1);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
        });

        // ****************** Nodes section ***************************

        // Update the nodes...
        let node = canvas.selectAll('g.node')
            .data(nodes, function (d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new modes at the parent's previous position.
        let nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', function (d) {
                return 'translate(' + source.y0 + ',' + source.x0 + ')';
            })
            .on('click', click);

        // Add Circle for the nodes
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', radius)
            .attr('fill', function (d) {
                return `url(#${d.data.picture})`;
            });

        // Add labels for the nodes
        nodeEnter.append('text')
            .attr('dy', radius + 30)
            .attr('x', 0)
            .attr('text-anchor', 'midle')
            .text(function (d) {
                return d.data.name;
            });

        // UPDATE
        let nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
            .duration(duration)
            .attr('transform', function (d) {
                return 'translate(' + d.y + ',' + d.x + ')';
            });

        // Update the node attributes and style
        nodeUpdate.select('circle.node')
            .attr('r', radius)
            .attr('fill', function (d) {
                return `url(#${d.data.picture})`;
            })
            .attr('cursor', 'pointer');

        // Remove any exiting nodes
        let nodeExit = node.exit().transition()
            .duration(duration)
            .attr('transform', function (d) {
                return 'translate(' + source.y + ',' + source.x + ')';
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
            .attr('r', radius);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        // ****************** links section ***************************

        // Update the links...
        let link = canvas.selectAll('path.link')
            .data(links, function (d) {
                return d.id;
            });

        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', function (d) {
                var o = {x: source.x0, y: source.y0};
                return diagonal(o, o);
            });

        // UPDATE
        let linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(duration)
            .attr('d', function (d) {
                return diagonal(d, d.parent);
            });

        // Remove any exiting links
        var linkExit = link.exit().transition()
            .duration(duration)
            .attr('d', function (d) {
                var o = {x: source.x, y: source.y};
                return diagonal(o, o);
            })
            .remove();

        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {
            let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;

            return path;
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }
    }
}



