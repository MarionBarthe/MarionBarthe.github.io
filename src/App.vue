<template>
  <div class="grid">

    <Gallery/>
    <Footer/>

  </div>

</template>

<script>
  import Gallery from './components/Gallery.vue';
  import Footer from './components/Footer.vue';

  export default {
    name : "main",
    components: {  Gallery, Footer },  
  }

</script>

<style>
.grid{
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 
    "sidebar gallery"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr 40px;
  width: 98lvw;
}
</style>