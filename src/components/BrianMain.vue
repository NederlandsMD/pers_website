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
        {{ opening_line }}
        <JobExpSection title="Professional Experience"/>
        <JobExpSection title="Education"/>
        <JobExpSection title="My Skills"/>
        <JobExpSection title="My Projects"/>
        <!--<br />
        <BottomLinks/> -->
      </div>
      <div class="col-md-3">
        <WorldMap/>
        <br/>
        <BrianPic/>
      </div>
        <!-- <img alt="Brian Pic" src="../assets/bds_photo.png" height="200">
        <p>
          To learn more about Brian, you can check out his career profile:<br>
          <a href="https://www.linkedin.com/in/brian-salant/" target="_blank" rel="noopener">LinkedIn</a>
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import './BrianMain.scss'
import JobExpSection from './JobExpSection.vue'

export default {
  name: 'BrianMain',
  props: {
    msg: String,
    opening_line: String
  },
  components: {
    JobExpSection
  }
}
</script>
