<template>
  <div class="projSection">
    <h5 class="bord_highlight sectHeader" :style="{width: widthNow}">{{ title }}</h5>
    <!-- The Big question is how to create a loop for this with data points that CAN have
      links associated -->
    <ul>
      <li v-for="proj in myExp" v-bind:key="proj.id">
        <a v-bind:href="proj.ref" target="_blank">
          {{ proj.desc }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'ProjSection',
  props: {
    title: String,
    myExp: Array,
    widthNow: String
  }
}
</script>
