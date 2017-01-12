import * as d3 from 'd3';

const data = [10];
const height = 500;
const width = 500;

const canvas = d3.select('.enter-up-exit .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(50, 50)');

let circle1 = canvas.append('circle')
    .attr('cx', 20)
    .attr('cy', 120)
    .attr('r', 25);

let circle2 = canvas.append('circle')
    .attr('cx', 20)
    .attr('cy', 220)
    .attr('r', 25);

let circles = canvas.selectAll('circle')
    .data(data)
    .attr('fill', 'green')
    .exit()
        .attr('fill', 'blue');



