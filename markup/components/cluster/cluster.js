
import * as d3 from 'd3';

const data = [20, 40, 60];
const height = 1500;
const width = 1500;
const r = 300;


buildCanvas();


function buildCanvas() {

    const canvas = d3.select('.cluster .l-restrictor')
        .append('svg')
        .attr('height', height)
        .attr('width', width);

    let color = d3.scaleOrdinal()
        .range(['red', 'blue', 'yellow']);

    let group = canvas.append('g')
        .attr('transform', 'translate(500, 500)');

    let arc = d3.arc()
        .innerRadius(150)
        .outerRadius(r);

    let pie = d3.pie()
        .value( (d) => {
            return d;
        });

    let arcs = group.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('d', arc)
        .attr('fill', (d) => {
            return color(d.data);
        });

    arcs.append('text')
        .attr('transform', (d) => {
            return `translate( ${arc.centroid(d)} )`;
        })
        .attr('font-size', 22)
        .attr('fill', '#333')
        .attr('text-anchor', 'middle')
        .text( (d) => {
            return d.value;
        });





}































