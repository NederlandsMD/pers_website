<template>
  <div class="midSection3">
    <h5 class="bord_highlight sectHeader2">{{ title }}</h5>
    <!-- The Big question is how to create a loop for this with data points that CAN have
      links associated -->
    <ul>
      <li><a href='https://www.cdc.gov/nchs/maternal-mortality/dashboard/' target="_blank">NCHS: R Maternal Mortality</a></li>
      <li><a href='https://www.cdc.gov/nchs/data-visualization/life-expectancy/' target='_blank'>NCHS: Life Expectancy by U.S. Census Tract</a></li>
      <li><a href='https://core-viz.herokuapp.com/' target='_blank'>Bubble Suburst Chart for CORE Tool</a></li>
      <li><a href='http://ahrportal.s3.amazonaws.com/index.html' target='_blank'>AHR Portal Prototype</a></li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'MidSection3',
  props: {
    title: String,
    job_items: String
  }
}
</script>
