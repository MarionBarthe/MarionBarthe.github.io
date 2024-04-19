<template>
    <footer>
        <p> DnDiscovery : an IMAC student web project - Website and icons made by Marion Barthe - Find the code on <a href="https://github.com/MarionBarthe/projet_WEB_S4.git">GitHub</a></p>
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