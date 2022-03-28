<template>
  <GoogleMap
  api-key="AIzaSyChRDtOS3t48nFpvqO00zVv4jyBocG39fw"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="4"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = {lat: 37.781169, lng: -122.433633}
    const markerOptions = {position: {lat: 37.781169, lng: -122.433633}, label: 'h', title: 'home' }
    return { center, markerOptions }
  },
})
</script>