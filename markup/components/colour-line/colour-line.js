import * as d3 from 'd3';

let width = Math.max(innerWidth);
let height = Math.max(d3.select('.colour-line-wrapper').node().getBoundingClientRect().height);
let i = 0;

let svg = d3.select('.colour-line-wrapper').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle);

function particle() {
    let m = d3.mouse(this);

    svg.insert('circle')
        .attr('cx', m[0])
        .attr('cy', m[1])
        .attr('r', 1e-6)
        .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style('fill', d3.hsl((i = (i + 150) % 360), 1, 0.5))
        .style('stroke-opacity', 1)
      .transition()
        .duration(3000)
        .ease(Math.sqrt)
        .attr('r', 60)
        .style('opacity', 0)
        .remove();

    d3.event.preventDefault();
}
