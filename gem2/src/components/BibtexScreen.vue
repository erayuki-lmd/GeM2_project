<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--purple-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="Bibtex"/>
    <div id="bibSpace">
        <div id="bibText">
            <!-- @article{aberman2020unpaired,<br>
            author = {Aberman, Kfir and Weng, Yijia and Lischinski, Dani and Cohen-Or, Daniel and Chen, Baoquan},<br>
            title = {Unpaired Motion Style Transfer from Video to Animation},<br>
            journal = {ACM Transactions on Graphics (TOG)},<br>
            volume = {39},<br>
            number = {4},
            pages = {64},
            year = {2020},
            publisher = {ACM}
            } -->
            Comming Soon...!
        </div>
    </div>
</template>


<style scoped>
    #bibSpace{
        position:relative;
        margin-top:10px;
        left:20px;
        width:auto;
        height:auto;
        background-color: var(--bib-color);
        border-radius: 5px;
        color: var(--bg-color);
        padding:10px;
    }
    #bibSpace > #bibText{
        position:relative;
        width:auto;
        height:auto;
        color: var(--bg-color);
        opacity:1;
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


