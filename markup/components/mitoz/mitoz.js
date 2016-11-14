import * as d3 from 'd3';

let width = Math.max(innerWidth);
let height = d3.select('.mitoz-wrapper').node() ? Math.max(d3.select('.mitoz-wrapper').node().getBoundingClientRect().height) : null;

let svg = d3.select('.mitoz-wrapper').append('svg')
    .attr('width', width)
    .attr('height', height);


let leftCell = svg.insert('ellipse')
    .attr('cx', width / 2 - 50)
    .attr('cy', height / 2 - 50)
    .attr('rx', 198)
    .attr('ry', 184)
    .attr('fill', '#6aa079')
    .transition()
    .delay(3600)
    .duration(3000)
    .attr('ry', 150)
    .attr('cx', width / 2 + 250)
    .transition()
    .attr('rx', 198)
    .attr('ry', 184)
    .transition()
    .attr('cx', width / 2 + 2500);

let leftRight = svg.insert('ellipse')
    .attr('cx', width / 2 - 50)
    .attr('cy', height / 2 - 50)
    .attr('rx', 198)
    .attr('ry', 184)
    .attr('fill', '#6aa079')
    .transition()
    .delay(3600)
    .duration(3000)
    .attr('ry', 140)
    .attr('cx', width / 2 - 250)
    .transition()
    .delay(1000)
    .attr('rx', 198)
    .attr('ry', 184);

let leftCore = svg.insert('ellipse')
    .attr('cx', width / 2 - 50)
    .attr('cy', height / 2 - 50)
    .attr('rx', 63)
    .attr('ry', 58)
    .attr('fill', '#a7b8cd')
    .attr('stroke', 'transparent')
    .transition()
    .delay(300)
    .duration(3000)
    .attr('ry', 60)
    .attr('cx', width / 2 + 50)
    .transition()
    .duration(300)
    .attr('stroke', '#666')
    .transition()
    .duration(3000)
    .attr('cx', width / 2 + 280)
    .attr('cy', height / 2 - 100)
    .transition()
    .delay(3000)
    .attr('cx', width / 2 + 2500);

let rightCore = svg.insert('ellipse')
    .attr('cx', width / 2 - 50)
    .attr('cy', height / 2 - 50)
    .attr('rx', 63)
    .attr('ry', 58)
    .attr('fill', '#a7b8cd')
    .attr('stroke', 'transparent')
    .transition()
    .delay(300)
    .duration(3000)
    .attr('ry', 60)
    .attr('cx', width / 2 - 150)
    .attr('cy', height / 2 - 90)
    .transition()
    .duration(300)
    .attr('stroke', '#666')
    .transition()
    .duration(3000)
    .attr('cx', width / 2 - 280)
    .attr('cy', height / 2 - 60);

// let leftPart = svg.insert('ellipse')
//     .attr('cx', width / 2 - 50)
//     .attr('cy', height / 2 - 50)
//     .attr('rx', 100)
//     .attr('ry', 100)
//     .attr('fill', '#333')
//     .transition()
//     .delay(300)
//     .duration(3000)
//     .attr('fill', '#f33258')
//     .attr('ry', 60)
//     .attr('cx', width / 2 + 50)
//     .transition()
//     .delay(0)
//     .duration(3000)
//     .attr('ry', 100)
//     .transition()
//     .attr('cx', width / 2 + 450);

// let rightPart = svg.insert('ellipse')
//     .attr('cx', width / 2 - 50)
//     .attr('cy', height / 2 - 50)
//     .attr('rx', 100)
//     .attr('ry', 100)
//     .attr('fill', '#333')
//     .transition()
//     .delay(300)
//     .duration(3000)
//     .attr('fill', '#f33258')
//     .attr('ry', 60)
//     .attr('cx', width / 2 - 150)
//     .transition()
//     .delay(500)
//     .duration(3000)
//     .attr('ry', 100)
//     .transition()
//     .attr('fill', '#f33258')
//     .attr('cx', width / 2 - 450)
//     .attr('cy', width / 2 - 450);


















