
import * as d3 from 'd3';

const height = 500;
const width = 500;

buildCanvas();


function buildCanvas() {

    const canvas = d3.select('.arcs .l-restrictor')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('transform', 'translate(100, 100)');

    let r = 100;
    let p = Math.PI * 2;

    let arc = d3.arc()
        .innerRadius(r - 20)
        .outerRadius(r)
        .startAngle(0)
        .endAngle(p - 1);


    canvas.append('path')
        .attr('d', arc);


}






























