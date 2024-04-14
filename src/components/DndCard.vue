<template>
  <div class="dnd-card flex-items dnd-card-test black-border">
    <div class="card-img tooltip">
        <img v-if=" type=='monsters/'" src='@/assets/icons/monster_icon.jpg'>
        <img v-else-if=" type=='spells/'" src='@/assets/icons/spell_icon.jpg'>
        <img v-else=" type=='magicitems/'" src='@/assets/icons/item_icon.jpg'>
        <span class="tooltiptext">{{type}}</span>
      <!-- <img v-bind:src="pictureUrl"/> -->
    </div>   
        
    <header class="card-header">
      <h4 class="card-name ">{{ name }}</h4>
    </header>

    <div class="card-highlight">
        <p v-html=" highlight "></p>
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

