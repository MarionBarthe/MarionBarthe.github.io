<template>
    <footer>
        <p> DnDig : an app made by Marion Barthe </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
footer {
  grid-area: footer;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: var(--black);
  color: var(--soft-white);
  padding: 10px;
}
</style>