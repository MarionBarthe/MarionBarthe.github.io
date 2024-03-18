<template>
   
  <div class="gallery-options">
    <div class="search-bar"> <!-- @updatesearch-->
      <label for="search">Cherchez des sorts, monstres et autre par thème : </label>
      <input type="text" id="search" v-model="search" placeholder="ex : fire, dark, fun..." @keyup.enter="searchResults">
      <button v-if="search" @click="cleanSearch">X</button>
      <button type="button" @click="searchResults">search</button> 
    </div>

    <div class="sort-options">
      <label for="cardSort">Sort by : </label>
      <select v-model="cardSortType" id="cardSort" @change="sortGallery">
        <option value="type">Type</option>
        <option value="AZName">Names from A to Z</option>
        <option value="ZAName">Names from Z to A</option>
      </select>
      <div>
        <label>Filter : </label>
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" value="monsters/" @change="updateFilter"> Monsters
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" value="spells/" @change="updateFilter"> Spells
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" value="magicitems/" @change="updateFilter"> Magic items
      </div>
    </div>
  </div>
    <div class="gallery flex-container">
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
  import {getDndData} from '@/services/api.js'
  
  export default {
    name: 'Gallery',
   
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
        cardSortType: "type",
        checkedTypes: ["spells/", "monsters/", "magicitems/"]
      };
    },
    created: function() {
      this.retrieveDndData("dark");
      this.sortGallery();
    },
    methods: {
        async retrieveDndData(search) {
          this.dndData = await getDndData(search);
        },
        cleanSearch: function() {
          this.search = ""
        }, 
        searchResults: function() {
          this.retrieveDndData(this.search);
        },
        display: function(type){

        },
        sortGallery: function(){
          if(this.cardSortType=="AZName"){
            this.dndData.sort((a,b) => a.name>b.name);
          }
          else if(this.cardSortType=="ZAName") {
            this.dndData.sort((a,b) => a.name<b.name);
          }
          else {
            this.dndData.sort((a,b) => a.type >=b.type);
          }
        },
        updateFilter: function(){
          
        }
    },
    components : { 
      DndCard
    }  
  }
</script>

<style>
 
</style>