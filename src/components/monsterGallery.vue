<template>
    <!-- <div class="monsters-gallery"> -->
        <MonsterCard 
          v-for="monster in monstersData"
          :key="monster.slug" 
          :name="monster.name" 
          :type="monster.type" 
          :size="monster.size"
          />
    <!-- </div> -->
  </template>

  <script>
  import MonsterCard from '@/components/monsterCard.vue'
  import {getMonstersData} from '@/services/api.js'
  
  export default {
    name: 'MonstersGallery',
   
    data() {
      return {
        monstersData: []
      };
    },
    created: function() {
      this.retrieveMonstersData();
    },
    methods: {
        async retrieveMonstersData() {
            this.monstersData = await getMonstersData();
        }
    },
    components : { 
      MonsterCard
    }
  }
  </script>