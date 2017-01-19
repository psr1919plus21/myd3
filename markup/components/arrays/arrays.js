import * as d3 from 'd3';

const height = 500;
const width = 500;

d3.csv('static/csv/mydata.csv', (err, data) => {
    if (err) {
        throw new Error(err);
    }
    buildBars(data);
});



function buildBars(data) {
    let userAges = [];
    data.forEach((user) => {
        userAges.push(user.age);
    });

    let widthRange = d3.scaleLinear()
        .domain(d3.extent(userAges))
        .range([d3.min(userAges), width]);

    let colorRange = d3.scaleLinear()
        .domain(d3.extent(userAges))
        .range(['red', 'blue']);

    const canvas = d3.select('.arrays .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(50, 50)');

    console.log(data);

    let bars = canvas.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
            .attr('x', 0)
            .attr('y', (d, i) => {
                return i * 60;
            })
            .attr('height', 50)
            .attr('width', (d) => {
                return widthRange(d.age);
            })
            .attr('fill', (d) => {
                return colorRange(d.age);
            });

    let labels = canvas.selectAll('text')
        .data(data)
        .enter()
            .append('text')
            .attr('fill', '#fff')
            .attr('x', 20)
            .attr('y', (d, i) => {
                return i * 60 + 30;
            })
            .text((d) => {
                return d.name;
            });

}






























