
<template>
<!-- TODO: api key shouldn't be public... -->
  <GoogleMap
  api-key="AIzaSyChRDtOS3t48nFpvqO00zVv4jyBocG39fw" 
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="4"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script setup>
import { defineComponent, computed } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import { useStore } from 'vuex';

const store = useStore();

// Gets current hovered over state via Vuex
const markerOptions = computed(() => {console.log(store.state.hoveredSelection[0]); console.log(store.state.hoveredSelection[1]); console.log(store.state.hoveredSelection[2]);
    return {position: {lat: store.state.hoveredSelection[1], lng: store.state.hoveredSelection[2]}, title: store.state.hoveredSelection[0]};});
const center = computed(() => {return {lat: store.state.hoveredSelection[1], lng: store.state.hoveredSelection[2]};});
</script>