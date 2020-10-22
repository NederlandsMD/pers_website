<template>
  <div class="midSection">
    <h5 class="bord_highlight sectHeader" :style="{width: widthNow}">{{ title }}</h5>
    <ul>
      <li v-for="item in myExp" v-bind:class="item.class" v-bind:key="item.id">
        {{ item.desc }}
      </li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'
import { bus } from '../main'
import * as d3 from 'd3'

export default {
  name: 'MidSection',
  props: {
    title: String,
    myExp: Array,
    widthNow: String
  },
  created() {
    bus.$on('kickIn', (ctyName) => {
      d3.selectAll('.' + ctyName)
        .transition()
        .duration(250)
        .ease(d3.easeLinear)
        .style('font-weight', 'bold')
        .style('color', '#e9692c')
      })
    bus.$on('kickOut', (ctyName) => {
      d3.selectAll('.' + ctyName)
        .transition()
        .duration(250)
        .ease(d3.easeLinear)
        .style('font-weight', 'normal')
        .style('color', '#000')
      })
  }
}
</script>
