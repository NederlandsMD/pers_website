<template>
  <div class="worldMap">
    <h5 id="b_world">{{ world_msg }}</h5>
    <div id="worldSvg"></div>
  </div>
</template>

<script>
import './WorldMap.scss'
import * as d3 from 'd3'
import * as topojson from 'topojson'
import mapJson from '../assets/world-110m2.json'
import { bus } from '../main'

export default {
  name: 'WorldMap',
  props: {
    brianCountries: Array,
    world_msg: String
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {

      // I will come back to dynamic sizing later, let's get map going first
      // const margin = {
      //   top: 20,
      //   bottom: 20,
      //   left: 130,
      //   right: 130
      // }
      //
      // const currtWidth = parseInt(d3.select('.col-md-6').style('width'));
      //
      // const svgWidth = currtWidth - margin.left - margin.right;
      // const svgHeight = (svgWidth * 0.5);

      const brianCountryDict = {
        'Spain' : 724,
        'USA': 840,
        'Netherlands': 528,
        'Belgium': 56,
        'Turkey': 792,
        'Argentina': 32,
        'Philippines': 608,
        'Indonesia': 360,
        'Brasil': 76,
        'Italy': 380,
        'France': 250,
        'Germany': 276,
        'Australia': 36,
      }

      const [width, height] = [500, 250];

      const projection = d3.geoMercator()
        .center([0, 0])
        .scale(80)
        .rotate([0, 0])

      const svg = d3.select('#worldSvg').append('svg')
        // .attr( 'class', 'center-container' )
        .attr( 'height', height ) // play with this here
        .attr( 'width', width )
        .style('border-radius', '100px')
        .attr( 'display', 'block')
        .style('border', '1px solid #73a9c2')
        .style('margin-left', '-120px')
        .style('margin-top', '20px');

      const path = d3.geoPath()
        .projection(projection);

      const g = svg.append('g');

      g.selectAll('path')
        .attr('height', 300)
        .attr('width', 500)
        .data( topojson.feature(mapJson, mapJson.objects.countries).features)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'lander')
        .attr('fill', function(d) {
          if (Object.values(brianCountryDict).indexOf(d.id) > -1) {
            return '#73a9c2';
          } else {
            return '#d6eef8';
          }
        })
        .on('mouseover', function(d) {
          let ctyID = d.originalTarget.__data__.id;
          if (Object.values(brianCountryDict).indexOf(ctyID) > -1) {
              let ctyName = Object.keys(brianCountryDict).find(key => brianCountryDict[key] === ctyID);
              d3.select(this)
                .transition()
                .duration(250)
                .ease(d3.easeLinear)
                .attr('fill', '#e9692c')
              bus.$emit('kickIn', ctyName);

              //text remove and add here is a problem
              // d3.select("#b_world")
              //   .remove('text');
              //
              // d3.select("#b_world")
              //   .append('text')
              //   .text(ctyName);
          }

          // As a result of this mouseover, I might want some field to pop up and say the name of the Country
          // and also highlight the experiences that relate to this country
        })
        .on('mouseleave', function(d) {
          let ctyID = d.originalTarget.__data__.id;
          if(Object.values(brianCountryDict).indexOf(ctyID) > -1) {
            let ctyName = Object.keys(brianCountryDict).find(key => brianCountryDict[key] === ctyID);
            d3.select(this)
              .transition()
              .duration(250)
              .ease(d3.easeLinear)
              .attr('fill', '#73a9c2')
            bus.$emit('kickOut', ctyName);
          }
        });
    }

  }
}
</script>
