import * as d3 from 'd3';

let width = Math.max(innerWidth);
let height = d3.select('.colour-line-wrapper').node() ? Math.max(d3.select('.colour-line-wrapper').node().getBoundingClientRect().height) : null;
let i = 0;

let svg = d3.select('.drop-lines').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle);

function particle() {
    let m = d3.mouse(this);

    svg.insert('rect')
        .attr('x', m[0])
        .attr('y', m[1])
        .attr('height', 0)
        .attr('width', 8)
        .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style('fill', d3.hsl((i = (i + 150) % 360), 1, 0.5))
        .style('stroke-opacity', 1)
      .transition()
        .duration(1000)
        .ease(Math.sqrt)
        .attr('height', 310)
        .style('opacity', 0)
        .remove();
    d3.event.preventDefault();
}


