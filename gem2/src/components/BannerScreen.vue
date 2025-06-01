<script setup lang="ts">
    function goGit() {
        const url = "https://github.com/erayuki-lmd/Generalized_Stylized_Motion_Generation_Method/tree/main";
        window.location.href = url;
    }
</script>

<template>
    <div id="bgCircle">
    </div>
    <div id="bgBanner">
    </div>
    <div id="mainBanner">
    </div>
    <div id="mainCircle">
        <div id="mainIcon">
            <i class="bi bi-gem"></i>
        </div>
    </div>
    <div id="ButtonArea">
        <div class="ButtonElem" @click="goGit">
            <i class="bi bi-github"></i> Code
        </div>
        <div class="ButtonElem">
            <i class="bi bi-youtube"></i> Movie
        </div>
        <div class="ButtonElem">
            <i class="bi bi-file-text"></i> Paper
        </div>
    </div>
</template>


<style scoped>
    #bgCircle{
        position:absolute;
        top:0;
        left:0;
        height:calc(60px + 10px);
        width:calc(60px + 10px);
        border-radius:0 0 calc(30px + 10px) calc(30px + 10px);
        background-color: var(--green-color);
    }
    #bgBanner{
        position:absolute;
        top:0;
        left:0;
        height:calc(45px + 5px);
        width:100vw;
        background-color: var(--green-color);
    }
    #mainCircle{
        position:absolute;
        top:0px;
        left:5px;
        height:calc(60px + 5px);
        width:60px;
        border-radius:0 0 4vw 4vw;
        background-color: var(--bg-color);
    }
    #mainBanner{
        position:absolute;
        top:0;
        left:0;
        height:45px;
        width:100vw;
        background-color: var(--bg-color);
    }
    #mainCircle >#mainIcon{
        position:absolute;
        top:0;
        left:0;
        text-align: center;
        width:100%;
        font-size:40px;
        color: var(--green-color);
    }

    #ButtonArea{
        position: absolute;
        display: flex;
        top: 0;
        left: calc(10vw + 10px);
        height:45px;
    }

    #ButtonArea > .ButtonElem{
        position: relative;
        width: 25vw;
        height: 45px;
        background-color: var(--bg-color);
        font-size:30px;
        text-align: center;
        color: var(--green-color);
    }

</style>


