<template>
  <MonsterGallery/>
</template>

<script>
// import {MonsterCard} from './components/monsterCard.vue';
import MonsterGallery from './components/monsterGallery.vue';

export default {
  name : "main",
  components: { MonsterGallery },
  // async mounted(){
  //   let response = await fetch('https://api.open5e.com/monsters/')
  //   console.log(await response.json())
  // }

}



</script>
