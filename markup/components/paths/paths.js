import * as d3 from 'd3';

const height = 500;
const width = 500;

buildCanvas();


function buildCanvas() {

    const canvas = d3.select('.paths .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(100, 100)');

    let data = [
        {x: 10, y: 20},
        {x: 140, y: 0},
        {x: 250, y: 270}
    ];

    let line = d3.line()
        .x((d) => {
            return d.x;
        })
        .y((d) => {
            return d.y;
        });

    canvas.selectAll('path')
        .data([data])
        .enter()
        .append('path')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', '#f7f7f7')
        .attr('stroke-width', 1);



}






























