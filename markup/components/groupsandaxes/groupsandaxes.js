import * as d3 from 'd3';

const data = [10, 40, 12, 15, 60];
const height = 500;
const width = 500;

const widthScale = d3.scaleLinear()
    .domain([0, 60])
    .range([0, width]);

const axis = d3.axisBottom()
    .ticks(10)
    .scale(widthScale);

const canvas = d3.select('.groupsandaxes .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(20, 0)');

const colorScale = d3.scaleLinear()
    .domain([0, 60])
    .range(['red', 'blue']);

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

canvas.append('g')
    .attr('transform', `translate(0, ${height - 20})`)
    .attr('class', 'axis-range')
    .call(axis);
