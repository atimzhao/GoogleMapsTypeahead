<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
import { ref} from 'vue'

// reactive state
const itemss = ref(["hi", "there", "buddy"])
const count = ref(0)

function onInputEventHandler(event) {
  // itemss.value = ["aaaaa"] // TODO call BE for list of stuff
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
      <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Start writing..."
        :items="itemss"
        :minInputLength="1"
        :itemProjection="itemProjectionFunction"
        @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler"
        @onFocus="onFocusEventHandler"
        @onBlur="onBlurEventHandler"
      >
</vue3-simple-typeahead>
    </h3>
  </div>
</template>

<style scoped>
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
