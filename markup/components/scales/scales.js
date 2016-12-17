import * as d3 from 'd3';

const data = [20, 40, 50, 60];
const height = 500;
const width = 500;

const widthScale = d3.scaleLinear()
    .domain([0, 60])
    .range([0, width]);

const colorScale = d3.scaleLinear()
    .domain([0, 60])
    .range(['red', 'blue']);

const canvas = d3.select('.scales .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width);

const bars = canvas.selectAll('rect')
    .data(data)
    .enter()
        .append('rect')
        .attr('width', (d) => {
            return widthScale(d);
        })
        .attr('height', 50)
        .attr('fill', (d) => {
            return colorScale(d);
        })
        .attr('y', (d, i) => {
            return i * 100;
        });
