<script setup lang="ts">
    import { ref } from "vue";
    interface Props {
        color: string;
        subtitle: string;
    }
    const props = defineProps<Props>();
    const color = ref<string>(props.color);
    const subtitle = ref<string>(props.subtitle);
    
</script>

<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    </head>
    <div id="subTitleSpace" :style="{color: color}">
        <div id="Icon_1"><i class="bi bi-gem"></i></div>
        <div id="Icon_2"><i class="bi bi-gem"></i></div>
        <div id="Text">{{ subtitle }}</div>
    </div>
</template>


<style scoped>
    #subTitleSpace{
        position:relative;
        top:0;
        min-height:25px;
        width:auto;
    }

    #subTitleSpace > #Icon_1{
        position:absolute;
        top:0;
        left:0;
        font-size: 20px;
        rotate: -30deg;
    }

    #subTitleSpace > #Icon_2{
        position:absolute;
        top:13px;
        left:20px;
        font-size: 10px;
        rotate: 30deg;
    }

    #subTitleSpace > #Text{
        position:absolute;
        top:0px;
        left:40px;
        font-size: 20px;
        font-weight: bold;
    }

    
    @media (min-width: 900px) {

    #subTitleSpace{
        min-height:40px;
    }

    #subTitleSpace > #Icon_1{
        font-size: 30px;
    }

    #subTitleSpace > #Icon_2{
        left:30px;
        font-size: 20px;
    }

    #subTitleSpace > #Text{
        left:60px;
        font-size: 30px;
    }
}
</style>