<template>
   
  <div class="sidebar">
    <header class="app-title" >
      <h1>DnDig</h1>
    </header>

    <SearchBar v-model:search="search" @change="searchResults"></SearchBar>
    <SortOptions v-model:cardSortType="cardSortType"></SortOptions>
    <!-- <FilterOptions v-model:checkedTypes="checkedTypes"></FilterOptions> -->
    <fieldset class="filters">
      <legend>Filter : </legend>
      <div class="checkbox">
        <input type="checkbox" id="monsterCheckbox" v-model="checkedTypes" value="monsters/">
        <label for="monsterCheckbox">Monsters</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="spellCheckbox" v-model="checkedTypes" value="spells/"> 
        <label for="spellCheckbox">Spells</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="magicItemCheckbox" v-model="checkedTypes" value="magicitems/">
        <label for="magicItemCheckbox">Magic items</label>
      </div>
    </fieldset>
  </div>

  <div class="gallery">
    <DndCard 
      v-for="element in organizedDndData"
      :key="element.slug" 
      :name="element.name"
      :highlight="element.highlighted"
      :type="element.route" 
      :text="element.text"
      :source="element.document_title"
      />
  </div>

</template>

<script>
import DndCard from '@/components/DndCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import SortOptions from '@/components/SortOptions.vue'
// import FilterOptions from '@/components/FilterOptions.vue'
import {getDndData} from '@/services/api.js'

export default {
  name: 'Gallery',
  components : { 
    DndCard, SearchBar, SortOptions,
  },
  computed: {
    organizedDndData: function() {
      const field = ["AZName", "ZAName"].includes(this.cardSortType) ? "name" : "route"
      const reversed = ["ZAName"].includes(this.cardSortType)

      const filterFunc = (a) => this.checkedTypes.includes(a.route) 
      
      const comparator = (a, b) => a[field].localeCompare(b[field]) 
      let data = this.dndData.filter(filterFunc)
      data = data.sort(comparator)
      if (reversed) data = data.reverse()
      return data
    }
  },
  data() {
    return {
      dndData: [],
      search : "",
      cardSortType: "AZNAme",
      checkedTypes: ["spells/", "monsters/", "magicitems/"]
    };
  },
  created: function() {
    this.retrieveDndData("dark");
  },
  methods: {
      async retrieveDndData(search) {
        this.dndData = await getDndData(search);
      },
      searchResults: function() {
        this.retrieveDndData(this.search);
      },
  }
}
</script>

<style>
 
.gallery {
  grid-area: gallery;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: stretch;
}

.sidebar{
  grid-area: sidebar;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: var(--soft-white);
  color: var(--soft-black);
  border-right: 10px solid var(--black);
}
.sidebar > * {
  padding: 0.5em 1em ;
}
.app-title {
  background-color: var(--black);
  color: var(--soft-white);
  margin-top: 0;
  padding: 2em;
  text-align: center;
}
.form-element {
  background-color: var(--soft-white);
  color: var(--soft-black);
  border: 3px solid var(--black);
  padding: 0.4em;
  font-family: "Averia Serif Libre", serif;
  margin: 5px 0;
  /* width: 100%; */
}
.checkbox {
  display:block;
}
fieldset {
  border: 0;
}

button {
  background-color: var(--black);
  color: var(--soft-white);
  border: 5px solid var(--black);
  padding: 0.3em;
  font-family: "Averia Serif Libre", serif;
  margin: 5px;
}
button:hover {
  cursor: pointer;
  font-weight: bolder;
}

</style>