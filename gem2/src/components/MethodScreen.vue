<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--green-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="Method"/>
    <div id="mainText">
        <div id="subTitle">
            Training networks
        </div>
        <img src="@/assets/img/training.png" width="100%">
        <div id="arrowImg">
            <img src="@/assets/img/arrow.png" width="100%">  
        </div>
        
        <div id="subTitle">
            Applications
        </div>
        <img src="@/assets/img/applications.png" width="100%">
    </div>
</template>


<style scoped>
    #mainText{
        position:relative;
        margin-top:10px;
        left:20px;
        width: calc(100% - 20px);
    }
    #subTitle{
        font-size: 1.2rem;
        font-weight: bold;
    }
    #normalText{
        font-size: 1rem;
        opacity:0.8;
    }
    #arrowImg{
        position:relative;
        width:10%;
        left:calc(45% - 10px);
        margin:10px;
    }
    img {
        opacity: 0.95;
    }

</style>


