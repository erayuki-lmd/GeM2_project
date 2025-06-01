<script setup lang="ts">
import { onMounted, ref } from "vue";

import BannerScreen from "./components/BannerScreen.vue";
import TitleScreen from './components/TitleScreen.vue';
import AbstructScreen from './components/AbstructScreen.vue';
import ResultScreen from './components/ResultScreen.vue';
import MovieScreen from './components/MovieScreen.vue';
import BibtexScreen from './components/BibtexScreen.vue';

onMounted(() => {
  const titleElem = document.querySelector('#title');
  if (titleElem !== null){
    const titleProp = titleElem.getBoundingClientRect();
    titleBottom = titleProp.bottom - 5;
  }else{
    titleBottom = 0;
  }
});

var titleBottom: number = 1000000;
var bannerBool = ref<boolean>(false);

window.addEventListener("scroll", () => {
  if (window.scrollY > titleBottom) {
    bannerBool.value = true;
  }else{
    bannerBool.value = false;
  }
});

// const appElem = document.querySelector('#app');
// if (appElem !== null){
//   const bodyElem = appElem.querySelector('#body');
//   console.log(bodyElem);
// }
// if (bodyElem !== null){
//   const titleBottom = bodyElem.getBoundingClientRect();
//   console.log("!!!!!!!!!!!!");
//   console.log(titleBottom);
//   console.log("!!!!!!!!!!!!");
// }else{
//   console.log(bodyElem);
// }
</script>

<template>
  <div id="title">
    <TitleScreen />
  </div>
  <div id="body">
    <div id="tmpp">
      <AbstructScreen />
    </div>
    <div id="padding"></div>
    <ResultScreen />
    <div id="padding"></div>
    <MovieScreen />
    <div id="padding"></div>
    <BibtexScreen />
    <div id="padding"></div>
  </div>
  <Transition name="banner">
    <div id="banner" v-if="bannerBool">
      <BannerScreen />
    </div>
  </Transition>

</template>

<style scoped>
#banner {
  position: fixed;
  top:0;
  left:0;
  width:100vw;
  height:10vw;
}

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


.banner-enter-to,
.banner-leave-from{
  opacity:1;
}

.banner-enter-from,
.banner-leave-to{
  opacity:0;
}

.banner-enter-active,
.banner-leave-active{
  transition:1s;
}
</style>
