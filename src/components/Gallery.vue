<template>
   
  <!-- <GalleryOptions v-model:search="search" v-model:cardSortType="cardSortType" v-model:checkedTypes="checkedTypes"/> -->
  <div class="gallery-options">
    <SearchBar v-model:search="search" @change="searchResults"></SearchBar>
    <SortOptions v-model:cardSortType="cardSortType"></SortOptions>
    <!-- <FilterOptions v-model:checkedTypes="checkedTypes"></FilterOptions> -->
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
  import SearchBar from '@/components/SearchBar.vue'
  import SortOptions from '@/components/SortOptions.vue'
  // import FilterOptions from '@/components/FilterOptions.vue'
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
      // this.sortGallery();
    },
    methods: {
        async retrieveDndData(search) {
          this.dndData = await getDndData(search);
        },
        searchResults: function() {
          this.retrieveDndData(this.search);
        },
        // cleanSearch: function() {
        //   this.search = ""
        // }, 
      
        display: function(type){

        },
        // sortGallery: function(){
        //   if(this.cardSortType=="AZName"){
        //     this.dndData.sort((a,b) => a.name>b.name);
        //   }
        //   else if(this.cardSortType=="ZAName") {
        //     this.dndData.sort((a,b) => a.name<b.name);
        //   }
        //   else {
        //     this.dndData.sort((a,b) => a.type >=b.type);
        //   }
        // },
        updateFilter: function(){
          
        }
    },
    components : { 
      DndCard, SearchBar, SortOptions, 
    }  
  }
</script>

<style>
 
</style>