<template>
    <div class="monster-card">
      <!-- <img class="picture" v-bind:src="pictureUrl"/> -->
      <div>
        <h2 class="name">{{name}}</h2>
        <p class="size">{{size}}</p>
        <p class="type">{{type}}</p>
      </div>  
    </div>
  </template>
  
  <script>
  // import monsters from '@/services/api.js'

  export default {
    name: 'MonsterCard',
      props: {
      name: {type: String, required: true},
      type: String, 
      size: String
    //   pictureUrl: {type: String, default:"https://my-best-kennel.com/pictures/default.png"}
    }
  }
  </script>