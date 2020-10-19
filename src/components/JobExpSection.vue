<template>
  <div class="midSection">
    <h5 class="bord_highlight sectHeader">{{ title }}</h5>
    <ul>
      <li>MirLogic Solutions Corporation (Jan 2019 - Present)</li>
      <li>Migration Policy Institute (Jan 2015 - May 2018)</li>
      <li>TicketNetwork - SuperIngressos (Jun 2013 - Jul 2014)</li>
      <li>Ankara Üniversitesi Vakfi Ilkegitim Okullu (Oct 2009 - Jun 2010)</li>
      <li>U.S. Embassy Ankara (Mar 2009 - Jun 2009)</li>

    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'JobExpSection',
  props: {
    title: String,
    job_items: String
  }
}
</script>
