<template>
    <div class="dnd-card flex-items">
      <div class="card-img">
        <img v-bind:src="pictureUrl"/>
      </div>
      <header class="name card-header">{{ name }}</header>

      <div class="card-content">

        <p class="type" v-if=" type=='monsters/'">Monster</p>
        <p class="type" v-else-if=" type=='spells/'">Spell</p>
        <p class="type" v-else-if=" type=='magicitems/'">Magic item</p>

        <p class="highlight" v-html=" highlight "></p>
        <p class="source">{{ source }}</p>
      </div>
     

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

