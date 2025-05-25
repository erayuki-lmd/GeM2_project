<script setup lang="ts">
import TitleScreen from './components/TitleScreen.vue';
import AbstructScreen from './components/AbstructScreen.vue';
import ResultScreen from './components/ResultScreen.vue';
import MovieScreen from './components/MovieScreen.vue';
import BibtexScreen from './components/BibtexScreen.vue';
</script>

<template>
  <div id="title">
    <TitleScreen />
  </div>
  <div id="body">
    <AbstructScreen />
    <div id="padding"></div>
    <ResultScreen />
    <div id="padding"></div>
    <MovieScreen />
    <div id="padding"></div>
    <BibtexScreen />
    <div id="padding"></div>
  </div>

</template>

<style scoped>


#title {
  position: relative;
  width:90vw;
  height:55vw;
  margin-left:auto;
  margin-right:auto;
  margin-top:100px;
}

#body {
  position: relative;
  width:80vw;
  height:100vh;
  margin-left:auto;
  margin-right:auto;
}

#padding {
  position:relative;
  height:100px;
  width:100%;
}

@media screen and (orientation: landscape) {
  #title {
    margin-top: 0px;
  }
}
</style>
