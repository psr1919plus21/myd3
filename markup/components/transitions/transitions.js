import * as d3 from 'd3';

const height = 500;
const width = 500;

const canvas = d3.select('.transitions .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(50, 50)');

let circle1 = canvas.append('circle')
    .attr('cx', 120)
    .attr('cy', 120)
    .attr('r', 25)
    .transition()
    .delay(1000)
    .duration(1000)
        .attr('fill', 'green')
        .attr('cx', 380)
    .transition()
    .duration(500)
    .attr('r', 60)
    .transition()
    .attr('fill', 'red');


