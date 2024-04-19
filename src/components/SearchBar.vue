<template>
  <div class="search-bar">
    <label for="search"> Search spells, monsters and magic items with a key word : </label>
    <input class="form-element" type="text" id="search" :value="search" @input="onSearchChanged" placeholder="ie : fire, dark, fun...">
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