<template>
  <div class="grid">

    <Gallery/>
    <Footer/>

  </div>

</template>

<script>
// import {MonsterCard} from './components/monsterCard.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';

export default {
  name : "main",
  components: { Gallery, Footer },
  // async mounted(){
  //   let response = await fetch('https://api.open5e.com/monsters/')
  //   console.log(await response.json())
  // }
 
}



</script>


<style>

</style>