<template>
  <div class="midSection">
    <h5 class="bord_highlight sectHeader">{{ title }}</h5>
    <!-- The Big question is how to create a loop for this with data points that CAN have
      links associated -->
    <ul>
      <li>MirLogic Solutions Corporation - Alexandria, VA (Jan 2019 - Present)</li>
      <li>Migration Policy Institute - Washington, DC (Jan 2015 - May 2018)</li>
      <li>TicketNetwork - SuperIngressos - South Windsor, CT (Jun 2013 - Jul 2014)</li>
      <li>Ankara Üniversitesi Vakfi Ilkegitim Okullu - Ankara, Turkey (Oct 2009 - Jun 2010)</li>
      <li>U.S. Embassy Ankara - Ankara, Turkey (Mar 2009 - Jun 2009)</li>
    </ul>
  </div>
</template>

<script>
import './BrianMain.scss'

export default {
  name: 'MidSection',
  props: {
    title: String,
    job_items: String
  }
}
</script>
