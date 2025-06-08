<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--orange-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="Demo Movie"/>
    <div id="mainText">
        <div id="movieArea">
            <iframe width=100% height="100%" src="https://www.youtube.com/embed/C8TxsknJC6Q?si=KScFsagSmNayG6a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>


<style scoped>
    #mainText{
        position:relative;
        margin-top:10px;
        left:20px;
        width: calc(100% - 20px);
    }
    #movieArea{
        width:100%;
        aspect-ratio: 16 / 9;
    }


</style>


