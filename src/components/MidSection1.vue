<template>
  <div class="midSection1">
    <h5 class="bord_highlight sectHeader1">{{ title }}</h5>
    <!-- The Big question is how to create a loop for this with data points that CAN have
      links associated -->
    <ul>
      <li>Yale University, MA, European Studies  -- 2013</li>
      <li>Ghent University (Belgium), MA, European Studies -- 2011</li>
      <li>University of California Los Angeles, BA, European Studies -- 2009</li>
      <br/>
      <li>George Washington University, Professional Certificate, Data Analytics  -- 2018</li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'MidSection1',
  props: {
    title: String,
    job_items: String
  }
}
</script>
