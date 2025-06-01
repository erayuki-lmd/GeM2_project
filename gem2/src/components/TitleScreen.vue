<script setup lang="ts">
    import { ref } from "vue";

    const word_speed: number = 40;
    const titleTextFull: string[] = [
        "Generalizing Stylized",
        "Motion",
        "Generation",
        "Method",
        "by Introducing Metadata-Independent Learning",
        "and Unified Multiple Motion Dataset"
    ]

    var titleTextTmp = ref<string[]>(Array(titleTextFull.length).fill(' '));
    var extractFlag = ref<boolean>(false);
    var moveFlag = ref<boolean>(false);
    var buttonFlag = ref<boolean[]>([false,false,false]);
    var moveTransition = ref('move-transition');

    const extractTime = 2000;
    const moveTime = 3000;
    const buttonTime = 700;

    const typeString = (index: number, fullLength: number): number => {
        for (let i:number = 0; i <= titleTextFull[index].length; i++) {
            if(i === titleTextFull[index].length){
                setTimeout(() => {
                    titleTextTmp.value[index] = titleTextFull[index];
                }, (i+fullLength) * word_speed); 
            }else{
                setTimeout(() => {
                    titleTextTmp.value[index] = titleTextFull[index].substring(0,1+i)+"|";
                }, (i+fullLength) * word_speed); 
            }
        }
        fullLength += titleTextFull[index].length + 1;
        if(index+1 < titleTextFull.length){
            return typeString(index+1, fullLength);
        }
        else{
            return fullLength;
        }
    }

    async function Starting(){
        var fullLength:number = typeString(0,0);
        setTimeout(() => {
            extractFlag.value = true;
        }, fullLength * word_speed);
        
        setTimeout(() => {
            moveFlag.value = true;
        }, fullLength * word_speed + extractTime);
        
        for(let i:number = 0; i<3; i++){
            setTimeout(() => {
                buttonFlag.value[i] = true;
                moveTransition.value = ''
            }, fullLength * word_speed + extractTime + moveTime + buttonTime*i +500);
        }

    }

    function goGit() {
        const url = "https://github.com/erayuki-lmd/Generalized_Stylized_Motion_Generation_Method/tree/main";
        window.location.href = url;
    }

    window.onload = Starting;
</script>

<template>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    </head>

    <div id="TitleScreanBack">
        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_1 whiteString">
                {{ titleTextTmp[0] }}
            </div>
            <div v-else class="greenString" :class="moveFlag ? ['Title_Ge', moveTransition] : 'Title_1'">
                Ge
            </div>
        </Transition>

        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_2 whiteString">
                {{ titleTextTmp[1] }}
            </div>
            <div v-else class="greenString" :class="moveFlag ? ['Title_M', moveTransition] : 'Title_2'">
                M
            </div>
        </Transition>

        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_3 whiteString">
                {{ titleTextTmp[2] }}
            </div>
            <div v-else class="greenString" :class="moveFlag ? ['Title_Ge', moveTransition] : 'Title_3'">
                Ge
            </div>
        </Transition>

        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_4 whiteString">
                {{ titleTextTmp[3] }}
            </div>
            <div v-else class="greenString" :class="moveFlag ? ['Title_M', moveTransition] : 'Title_4'">
                M
            </div>
        </Transition>

        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_5 whiteString">
                {{ titleTextTmp[4] }}
            </div>
        </Transition>

        <Transition name="extract">
            <div v-if="!extractFlag" class="Title_6 whiteString">
                {{ titleTextTmp[5] }}
            </div>
        </Transition>

        <Transition name="sup">
            <div v-if="moveFlag" class="Title_Sup greenString">
                2
            </div>
        </Transition>

        <div id="TitleButtonSpace">
            <Transition name="button">
                <div v-if="buttonFlag[0]" class="TitleButton" @click="goGit">
                    <div class="TitleButtonIcon">
                        <i class="bi bi-github"></i>
                    </div>
                    <div class="TitleButtonText">
                        Code
                    </div>
                </div>
            </Transition>
            
            <Transition name="button">
                <div v-if="buttonFlag[1]" class="TitleButton">
                    <div class="TitleButtonIcon">
                        <i class="bi bi-youtube"></i>
                    </div>
                    <div class="TitleButtonText">
                        Movie
                    </div>
                </div>
            </Transition>
            
            <Transition name="button">
                <div v-if="buttonFlag[2]" class="TitleButton">
                    <div class="TitleButtonIcon">
                        <i class="bi bi-file-text"></i>
                    </div>
                    <div class="TitleButtonText">
                        Paper
                    </div>
                </div>
            </Transition>
        </div>
    </div>

</template>


<style scoped>
    #TitleScreanBack{
        position:relative;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }

    #TitleScreanBack > .Title_1{
        position:absolute;
        top:15%;
        left:2vw;
        font-size: 4vw;
    }

    #TitleScreanBack > .Title_2{
        position:absolute;
        top:15%;
        left:39.5vw;
        font-size: 4vw;
    }

    #TitleScreanBack > .Title_3{
        position:absolute;
        top:15%;
        left:53.3vw;
        font-size: 4vw;
    }

    #TitleScreanBack > .Title_4{
        position:absolute;
        top:15%;
        left:74vw;
        font-size: 4vw;
    }

    #TitleScreanBack > .Title_5{
        position:absolute;
        top:30%;
        left:0vw;
        width:90vw;
        font-size: 4vw;
        text-align:center;
    }

    #TitleScreanBack > .Title_6{
        position:absolute;
        top:45%;
        left:0vw;
        width:90vw;
        font-size: 4vw;
        text-align:center;
    }


    #TitleScreanBack > .Title_Ge{
        position:absolute;
        top:15%;
        left:33.5vw;
        font-size: 10vw;
        text-align: center;
    }

    #TitleScreanBack > .Title_M{
        position:absolute;
        top:15%;
        left:46vw;
        font-size: 10vw;
        text-align:center;
    }

    #TitleScreanBack > .Title_Sup{
        position:absolute;
        top:15%;
        left:55.3vw;
        font-size: 5vw;
        text-align:center;
    }


    #TitleScreanBack > #TitleButtonSpace{
        position:absolute;
        display: flex;
        top:45%;
        left:15%;
        height:30%;
        width:70%;
        background-color: transparent;
        color: var(--green-color);
    }

    #TitleButtonSpace > .TitleButton{
        position:relative;
        margin-left:5%;
        margin-right:5%;
        height:100%;
        width:calc(70% / 3);
        background-color: var(--bg-color);
    }

    .TitleButton > .TitleButtonIcon{
        position:absolute;
        font-size:8vw;
        top:0%;
        left:0%;
        height:70%;
        width:100%;
        text-align: center;
    }

    .TitleButton > .TitleButtonText{
        position:absolute;
        font-size:3vw;
        top:70%;
        left:0%;
        height:30%;
        width:100%;
        text-align: center;
    }


    .whiteString {
        color:var(--word-color);
    }

    .greenString {
        color:var(--green-color);
    }

    .move-transition {
        transition: 2s;
    }



    .extract-enter-active,
    .extract-leave-active{
        transition:2s;
    }

    .extract-enter-to,
    .extract-leave-from{
        opacity:1;
    }

    .extract-enter-from,
    .extract-leave-to{
        opacity:0;
    }

    .sup-enter-active{
        animation-name: appear-sup;
        animation-duration: 3s;
    }

    @keyframes appear-sup {
        0% {
            font-size: 0vw;
        }
        70%{
            font-size: 0vw;
            left:calc(55.3vw - 2.5vw);
            top:30%;
        }
        100%{
            font-size: 5vw;
            left:55.3vw;
            font-size: 5vw;
            top:15%;
        }
    }


    .button-enter-from{
        opacity:0;
    }

    .button-enter-to{
        opacity:1;
    }

    .button-enter-active{
        transition:1s;
    }

</style>


