<template>
  <div id="app">
    <BrianMain msg="Brian Salant"
               opening_line='Grow as a data scientist, working on complex research questions, through statistics, programming, and data visualization techniques. Utilize my linguistic and cultural competence to work with clients across Europe and beyond.'/>
  </div>
</template>

<script>
import './App.scss'
import BrianMain from './components/BrianMain.vue'

export default {
  name: 'App',
  components: {
    BrianMain
  }
}
</script>
