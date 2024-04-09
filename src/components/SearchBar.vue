<template>
  <div class="search-bar">
    <label for="search">Cherchez des sorts, monstres et autre par thème : </label>
    <input type="text" id="search" :value="search" @input="onSearchChanged" placeholder="ex : fire, dark, fun...">
    <button v-if="search" @click="cleanSearch">X</button>
    <button type="button" @click="onSearchChanged">search</button> 
  </div>
</template>

<script>

export default {
name: 'SearchBar',
  props: {
      search : String,
  },
  emit: ["update:search"],
  methods: {
    cleanSearch: function() {
      this.$emit('update:search', "")
    },
    onSearchChanged(event) {
      this.$emit('update:search', event.target.value) 
    },
  }
}
</script>