<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue'
import axios from 'axios'

const store = useStore();

const updateSelection = (payload) => store.commit('updateSelection', payload)


// reactive state
const searchResults = ref([])

async function onInputEventHandler(event) {
  // Called when user is typing. Upon each input change, makes a query to BE.
  // Necessary to fulfill "State filtering logic should be done in backend(GraphQL)." requirement
  // However, vue3-simple-typeahead does allow for filtering in FE...
  try {
    const res = await axios.post('http://localhost:4000/graphql', {
    query: `
      query GetStates($searchTerm: String!) {
        getStates(searchTerm: $searchTerm) {
          name
        }
      }`,
      variables: {
        searchTerm: event.input
      }
  })
    console.log(res.data.data.getStates)
    searchResults.value = res.data.data.getStates.map(x => x.name)
  } catch (e) {
    console.log('err', e)
  }
}

async function onHoverItemHandler(currentSelection) {
  // Called when items in list are hovered over. Queries for that states lat and long and updates state using Vuex
  console.log(currentSelection)
  try {
    const res = await axios.post('http://localhost:4000/graphql', {
    query: `
      query GetStates($searchTerm: String!) {
        getStates(searchTerm: $searchTerm) {
          name
          lat
          lng
        }
      }`,
      variables: {
        searchTerm: currentSelection
      }
  })
    var state = res.data.data.getStates[0]
    updateSelection([state.name, state.lat, state.lng])
  } catch (e) {
    console.log('err', e)
  }

}
</script>

<template>
  <div class="greetings">
    <h1 class="green"> Google Maps Typeahead</h1>
    <h3>
      Search for a US state or territory!
      <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Start typing..."
        :items="searchResults"
        :minInputLength="1" 
        :itemProjection="itemProjectionFunction"
        @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler"
        @onFocus="onFocusEventHandler"
        @onBlur="onBlurEventHandler"
        @hoverItem="onHoverItemHandler"
      >
      </vue3-simple-typeahead>
    </h3>
  </div>
</template>

<style scoped>
.simple-typeahead {
  color: black;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
