<template>
    <div class="dnd-card">
      <img class="picture" v-bind:src="pictureUrl"/>
      <div>
        <h2 class="name">{{ name }}</h2>
        <!-- <p class="size">{{size}}</p> -->
        <p class="type" v-if=" type=='monsters/'">Monster</p>
        <p class="type" v-else-if=" type=='spells/'">Spell</p>
        <p class="type" v-else-if=" type=='magicitems/'">Magic item</p>
        <p class="text">{{ text }}</p>
        <p class="highlight" v-html=" highlight "></p>
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
      size: String,
      highlight: String,
      pictureUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
    }
  }
  </script>

  <!-- <css>
    .highlight {
      font-weight : bold;
    }
  </css> -->