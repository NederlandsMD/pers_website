<template>
  <div class="midSection2">
    <h5 class="bord_highlight sectHeader1">{{ title }}</h5>
    <!-- The Big question is how to create a loop for this with data points that CAN have
      links associated -->
    <ul>
      <li>Back-end: Python, R, SQL</li>
      <li>Front-end: JavaScript, React.js, Vue.js, jQuery, CSS, HTML, ES6, d3.js</li>
      <li>Other tools: Tableau, PowerBI</li>
      <li>Version Control: Git, Bash, GitLab</li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'MidSection2',
  props: {
    title: String,
    job_items: String
  }
}
</script>
