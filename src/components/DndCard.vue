<template>
    <div class="dnd-card flex-items dnd-card-test">
        <div class="card-img">
          <img v-bind:src="pictureUrl"/>
        </div>   
           
        <header class="card-header">
          <h4 class="name ">{{ name }}</h4>
          <p class="source">{{ source }}</p>
        </header>

      <!-- <div class="card-content"> -->

        <!-- <p class="type" v-if=" type=='monsters/'">Monster</p>
        <p class="type" v-else-if=" type=='spells/'">Spell</p>
        <p class="type" v-else-if=" type=='magicitems/'">Magic item</p> -->

        <div class="highlight">
          <p v-html=" highlight "></p>
        </div>
      <!-- </div> -->
     

    </div>
  </template>
  
  <script>
  // import monsters from '@/services/api.js'

  export default {
    name: 'DndCard',
      props: {
      name: {type: String, required: true},
      type: String, 
      text: String,
      highlight: String,
      pictureUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"},
      source : String,
    }
  }
  </script>

