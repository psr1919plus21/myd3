import * as d3 from 'd3';

const data = [20, 40, 50];

const canvas = d3.select('.bars .l-restrictor')
    .append('svg')
    .attr('height', 500)
    .attr('width', 500);

const bars = canvas.selectAll('rect')
    .data(data)
    .enter()
        .append('rect')
        .attr('width', (d) => {
            return d * 10;
        })
        .attr('height', 50)
        .attr('y', (d, i) => {
            return i * 100;
        });

