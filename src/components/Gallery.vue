<template>
   
   <div class="gallery-options">
    <label for="search">Cherchez des sorts, monstres et autre par thème : </label>
      <input type="text" id="search" v-model="search" placeholder="ex : fire, dark, fun..." @keyup.enter="searchResults">
      <button v-if="search" @click="cleanSearch">X</button>
      <!-- <button type="button" @click="display">Monsters</button>  -->

      <label for="card-sort">Trier par : </label>
        <select v-model="cardSortType" id="card-sort" @change="sort">
          <option value="AZName">Noms de A à Z</option>
          <option value="ZAName">Noms de Z à A</option>
        </select>
      <!-- <button @click="displayGallery">search</button> -->
  </div>
    <div class="gallery">
        <DndCard 
          v-for="element in dndData"
          :key="element.slug" 
          :name="element.name"
          :highlight="element.highlighted"
          :type="element.route" 

          />
    </div>
  </template>

  <script>
  import DndCard from '@/components/DndCard.vue'
  import {getDndData} from '@/services/api.js'
  
  export default {
    name: 'Gallery',
   
    data() {
      return {
        dndData: [],
        search : "",
        cardSortType: "AZName"
      };
    },
    created: function() {
      this.retrieveDndData("dark");
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
        sort: function(){
          //trier m
        }
    },
    components : { 
      DndCard
    }  
  }
  </script>