import * as d3 from 'd3';

const height = 500;
const width = 500;
const simpsonsYellow = '#fed41d';
const greyBorder = '#1c1d19';

buildCanvas();


function buildCanvas() {

    const canvas = d3.select('.el-barto .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(100, 50)');

    let haircutDots = [
        {x: 210, y: 73},
        {x: 212, y: 11},
        {x: 219, y: 22},
        {x: 224, y: 10},
        {x: 231, y: 21},
        {x: 237, y: 8},
        {x: 242, y: 20},
        {x: 249, y: 8},
        {x: 254, y: 20},
        {x: 263, y: 9},
        {x: 267, y: 22},
        {x: 275, y: 12},
        {x: 279, y: 25},
        {x: 287, y: 14},
        {x: 289, y: 28},
        {x: 298, y: 18},
        {x: 300, y: 31},
        {x: 310, y: 22},
        {x: 292, y: 118}
    ];

    // Haircut
    let haircutLine = d3.line()
        .x((d) => {
            return d.x;
        })
        .y((d) => {
            return d.y;
        });

    let bartHaircut = canvas.selectAll('path')
        .data([haircutDots])
        .enter()
        .append('path')
        .attr('d', haircutLine)
        .attr('fill', simpsonsYellow)
        .attr('stroke', greyBorder)
        .attr('stroke-width', 1);



}































