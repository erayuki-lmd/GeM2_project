<script setup lang="ts">
import { onMounted, ref } from "vue";

import BannerScreen from "./components/BannerScreen.vue";
import TitleScreen from './components/TitleScreen.vue';
import AbstructScreen from './components/AbstructScreen.vue';
import MethodScreen from './components/MethodScreen.vue';
import ResultScreen from './components/ResultScreen.vue';
import MovieScreen from './components/MovieScreen.vue';
import BibtexScreen from './components/BibtexScreen.vue';


var titleBottom: number = 1000000;
var bannerBool = ref<boolean>(false);

function getY() {
  let titleElem = document.querySelector('#title');
  if (titleElem !== null){
    let titleProp = titleElem.getBoundingClientRect();
    titleBottom = titleProp.bottom - 5;
  }else{
    titleBottom = 0;
  }
};

function scrollEvent() {
  if (window.scrollY > titleBottom) {
    bannerBool.value = true;
  }else{
    bannerBool.value = false;
  }
};


window.onscroll =  scrollEvent;

onMounted(() => {
  getY();
});

window.addEventListener('resize', () => {
  getY();
  scrollEvent();
});


</script>

<template>
  <div id="title">
    <TitleScreen />
  </div>
  <div id="body">
    <AbstructScreen/>
    <div id="padding"></div>
    <MovieScreen />
    <div id="padding"></div>
    <MethodScreen />
    <div id="padding"></div>
    <ResultScreen />
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
  max-width:900px;
}

#padding {
  position:relative;
  height:100px;
  width:100%;
}

@media (min-width: 900px) {
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


.banner-enter-to,
.banner-leave-from{
  left:-100vw;
}

.banner-enter-from,
.banner-leave-to{
  left:0vw;
}

.banner-enter-active,
.banner-leave-active{
  transition:1s;
}
</style>
