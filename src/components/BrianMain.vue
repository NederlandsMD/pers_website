<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-4 header">
        <h1 class="bord_highlight">{{ msg }}</h1>
      </div>
      <div class="col-md-8">
        &nbsp;
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 profile">
        <p id="openingLine">{{ opening_line }}</p>
        <MidSection title="Professional Experience" v-bind:my-exp="myJson.workExp" v-bind:width-now="myJson.widthProf"/>
        <MidSection title="Education" v-bind:my-exp="myJson.eduExp" v-bind:width-now="myJson.widthEdu"/>
        <MidSection title="My Skills" v-bind:my-exp="myJson.skills" v-bind:width-now="myJson.widthEdu"/>
        <ProjSection title="My Projects" v-bind:my-exp="myJson.projects" v-bind:width-now="myJson.widthProj"/>
        <!--<br />
        <BottomLinks/> -->
      </div>
      <div class="col-md-6">
        <WorldMap v-bind:world_msg="worldMsg"/>
        <img id="Bri_foot" height="800px" alt="Brian_picture" src="../assets/Brian_for_web.png">
      </div>
        <!-- <img alt="Brian Pic" src="../assets/bds_photo.png" height="200"> -->
    </div>
  </div>
</template>

<script>
import './BrianMain.scss'
import json from '../assets/full_data.json'
import MidSection from './MidSection.vue'
import ProjSection from './ProjSection.vue'
import WorldMap from './WorldMap.vue'

export default {
  name: 'BrianMain',
  props: {
    msg: String,
    opening_line: String
  },
  components: {
    MidSection,
    ProjSection,
    WorldMap
  },
  data() {
    return {
      myJson: json,
      worldMsg: "Brian's World"
    }
  }
}
</script>
