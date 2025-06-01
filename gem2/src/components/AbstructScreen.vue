<script setup lang="ts">
    import { ref } from "vue";
    import SubTitle from './childComp/SubTitle.vue';

    const iconColor = ref<string>('var(--pink-color)')
</script>

<template>
    <SubTitle :color=iconColor subtitle="What is GeM&sup2 ?"/>
    <div id="mainText">
        <div id="paperTitle">
            ~ Generalizing Stylized Motion Generation Method by Introducing Metadata-Independent Learning and Unified Multiple Motion Dataset ~
        </div>
        <div id="abstructText">
                GeM&sup2 aims to extend the applicability of stylized motion generation methods to be robust for large and diverse motions akin to those found in real-world data.
                Specifically, we introduce metadata-independent learning alongside style-focused learning, thereby enabling training from motions absent in motion-style datasets.
                In addition, we construct a novel motion dataset containing both various motions and stylized motions by unifying the multiple datasets to effectively train the model.
                Our novel learning method and dataset enable stylized motion generation methods to learn from both various motion knowledge and motion-style relations and improve their generalized performance.
        </div>
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


