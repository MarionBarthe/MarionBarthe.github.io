<template>
  <div class="dnd-card tooltip">
    <md-block class="tooltiptext">{{ text }}</md-block>

    <div class="card-img">
      <img v-if=" type=='monsters/'" src='@/assets/icons/monster_icon.jpg'>
      <img v-else-if=" type=='spells/'" src='@/assets/icons/spell_icon.jpg'>
      <img v-else=" type=='magicitems/'" src='@/assets/icons/item_icon.jpg'>
    </div>   
        
    <header class="card-header ">
      <h4 class="card-name ">{{ name }}</h4>
    </header>

    <div class="card-highlight">
        <md-block v-html=" highlight "></md-block>
    </div>
    <div class="card-source">
      <p >{{ source }}</p>
    </div>

  </div>
</template>
  
<script>
export default {
  name: 'DndCard',
    props: {
    name: {type: String, required: true},
    type: String, 
    text: String,
    highlight: String,
    source : String,
  }
}
</script>

<style>
.dnd-card{
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 30% 60% 10%;
  grid-template-areas: 
            "img name "
            "highlight-text highlight-text "
            "source source";
  height: var(--card-dimension);
  width: var(--card-dimension);
  margin: 10px;
  position: relative;
  background-color: var(--beige);
  border: 5px solid var(--black);
}
.card-img {
  position: absolute;
  grid-area: img;
  top: 0;
  left: 0;
  width: 0.3 * var(--card-dimension);
  height: auto;
}
.card-img img{
  width: 100%;
  height: 100%;
  object-fit: cover; /* To ensure the image covers the container */
}

/* Tooltip container */
.tooltip {
  position: relative;
}
/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: var(--soft-white);
  color: var(--soft-black);
  text-align: left;
  padding: 0.8em;
  font-size: smaller;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 0%;
  height: 100%;
  width: 100%;
  overflow: auto;
}
/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.card-header{
  grid-area: name;
  display: flex;
  padding: 10px;
  overflow:hidden;
  background-color: var(--black);
  color:var(--soft-white);
  border-bottom: 3px solid var(--black);
}
.card-name {
  font-weight: 700;
  font-size: 1.3em;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis; 
}
.card-highlight{
  grid-area: highlight-text;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9em;
}
span.highlighted {
  font-weight : bold;
  color:var(--orange);
}
.card-source {
  grid-area : source;
  text-align: center;
  font-style: italic;
  font-size: small;
  border-top: 3px solid var(--black);
}

</style>