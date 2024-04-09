<template>
    <div class="filters">
        <label>Filter : </label>
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="monsters/" @input="onCheckedTypeChanged"> Monsters
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="spells/" @input="onCheckedTypeChanged" > Spells
        <input type="checkbox" name="typeFilter" v-model="checkedTypes" :value="magicitems/" @input="onCheckedTypeChanged"> Magic items
    </div>
</template>

<script>

export default {
  name: 'GalleryOptions',
  emit: ["update:checkedTypes"],
  props: {
      checkedTypes : [],
  },

  methods: {
    onCheckedTypeChanged(event) {
      this.$emit('update:checkedTypes', event.target.value)
    },
  }
}
</script>