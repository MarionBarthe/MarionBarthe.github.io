<template>
  <div class="gallery-options">
    <div class="search-bar">
      <label for="search">Cherchez des sorts, monstres et autre par thème : </label>
      <input type="text" id="search" :value="search" @input="onSearchChanged" placeholder="ex : fire, dark, fun...">
      <button v-if="search" @click="cleanSearch">X</button>
      <button type="button" @click="searchResults">search</button> 
    </div>

    <div class="sort-options">
      <label for="cardSort">Sort by : </label>
      <select :value="dogsSortType" @input="onDogsSortTypeChanged" id="cardSort">
        <option value="type">Type</option>
        <option value="AZName">Names from A to Z</option>
        <option value="ZAName">Names from Z to A</option>
      </select>
      <div>
        <label>Filter : </label>
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="monsters/" @input="onCheckedTypeChanged"> Monsters
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="spells/" @input="onCheckedTypeChanged" > Spells
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="magicitems/" @input="onCheckedTypeChanged"> Magic items
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: 'GalleryOptions',
  props: {
      search : String,
      cardSortType : String,
      checkedTypes : [],
  },
  methods: {
    cleanSearch: function() {
      this.$emit('update:search', "")
    },
    onSearchChanged(event) {
      this.$emit('update:search', event.target.value) 
    },
    onDogsSortTypeChanged(event) {
      this.$emit('update:dogsSortType', event.target.value) 
    },
    onCheckedTypeChanged(event) {
      this.$emit('update:checkedTypes', event.target.value)
    },
  }
}
</script>