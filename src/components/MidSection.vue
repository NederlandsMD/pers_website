<template>
  <div class="midSection">
    <h5 class="bord_highlight sectHeader" :style="{width: widthNow}">{{ title }}</h5>
    <ul>
      <li v-for="item in myExp" v-bind:key="item.id">
        {{ item.desc }}
      </li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'
import { bus } from '../main'

export default {
  name: 'MidSection',
  props: {
    title: String,
    myExp: Array,
    widthNow: String
  },
  created() {
    bus.$on('fireMethod', (ctyName) => {
      console.log(ctyName);
    })
  }
}
</script>
