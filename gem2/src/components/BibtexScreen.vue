<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--purple-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="Bibtex"/>
    <div id="mainText">
        <pre>
        <code>
@article{aberman2020unpaired,
author = {Aberman, Kfir and Weng, Yijia and Lischinski, Dani and Cohen-Or, Daniel and Chen, Baoquan},
title = {Unpaired Motion Style Transfer from Video to Animation},
journal = {ACM Transactions on Graphics (TOG)},
volume = {39},
number = {4},
pages = {64},
year = {2020},
publisher = {ACM}
}
        </code>
        </pre>
    </div>
</template>


<style scoped>
    #mainText{
        position:relative;
        margin-top:10px;
        left:20px;
    }
    #paperTitle{
        font-size: 1.2rem;
        font-weight: bold;
    }
    #abstructText{
        font-size: 1rem;
        opacity:0.8;
    }


</style>


