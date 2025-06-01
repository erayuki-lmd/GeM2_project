<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--blue-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="Experimental Result"/>
    <div id="mainText">
        Comming Soon...!
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


