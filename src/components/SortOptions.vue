<template>
    <div class="sort-options">
      <label for="cardSort">Sort by : </label>
      <select class="form-element" :value="cardSortType" @input="onCardSortTypeChanged" id="cardSort">
        <option value="AZName">Names from A to Z</option>
        <option value="ZAName">Names from Z to A</option>
        <option value="type">Type</option>
      </select>
    </div>
</template>


<script>

export default {
  name: 'GalleryOptions',
  emit: ["update:cardSortType"],
  props: {
      cardSortType : String,
  },
  methods: {
    onCardSortTypeChanged(event) {
      sessionStorage.setItem("sort", event.target.value)
      this.$emit('update:cardSortType', event.target.value) 
    },
  }
}
</script>