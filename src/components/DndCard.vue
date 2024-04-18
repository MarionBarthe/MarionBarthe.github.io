<template>
  <div class="dnd-card flex-items dnd-card-test tooltip">

    <md-span class="tooltiptext">{{ text }}</md-span>
    <div class="card-img">
        <img v-if=" type=='monsters/'" src='@/assets/icons/monster_icon.jpg'>
        <img v-else-if=" type=='spells/'" src='@/assets/icons/spell_icon.jpg'>
        <img v-else=" type=='magicitems/'" src='@/assets/icons/item_icon.jpg'>
        <!-- <span class="tooltiptext">{{type}}</span> -->
      <!-- <img v-bind:src="pictureUrl"/> -->
    </div>   
        
    <header class="card-header ">
      <h4 class="card-name ">{{ name }}</h4>
    </header>

    <div class="card-highlight">
        <md-span v-html=" highlight "></md-span>
    </div>
    <div class="card-source">
      <p >{{ source }}</p>
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
      pictureUrl: {type: String, default:"@/../public/spell_icon.jpg"},
      source : String,
    }
  }
  </script>

