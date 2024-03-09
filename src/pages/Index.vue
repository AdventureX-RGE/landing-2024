<template>
<div id="outer-container" class="container">
    <div id="container" class="container">
        <component :is="screens[screenIndex].screen"/>
    </div>
    <DownwardButtonComp :action="nextScreen" class="bottom-bt bottom-bt-bounce-animation" id="downward-bt"/>
    <component :is="bg" v-for="bg in this.screens[this.screenIndex].bg" v-bind:key="bg.name"/>

    <!--隐藏的预加载内容-->
    <div v-for="(screen, index) in this.screens" v-bind:key="screen.screen.name" class="hidden">
        <div v-for="bg in screen.bg" v-bind:key="bg.name">
            <component :is="bg" v-if="index !== screenIndex"/>
        </div>
    </div>
</div>
</template>

<script>
import HelloScreen from "@/screens/Hello.vue";
import MainScreen from "@/screens/Main.vue";
import BottomCircleComp from "@/assets/bottomCircle/BottomCircleComp.vue";
import BottomRightCircleComp from "@/assets/bottomRightCircle/BottomRightCircleComp.vue";
import DownwardButtonComp from "@/components/DownwardButton.vue";
import DragonComp from "@/assets/dragon/Dragon.vue";
import PersonComp from "@/assets/person/Person.vue";
import CloudComp from "@/assets/cloud/Cloud.vue";

export default {
    name: "IndexPage",
    data() {
        return {
            screens: [
                {
                    screen: HelloScreen,
                    bg: [BottomCircleComp],
                },
                {
                    screen: MainScreen,
                    bg: [CloudComp, DragonComp, BottomRightCircleComp, PersonComp],
                },
            ],
            screenIndex: 0,
            handlers: [
                {
                    type: "keydown",
                    handler: this.handleSpaceNextScreen
                },
                {
                    type: "wheel",
                    handler: this.handleScrollNextScreen
                }
            ]
        }
    },
    components: {
        DownwardButtonComp,
    },
    mounted() {
        this.handlers.forEach((h) => {
            window.addEventListener(h.type, h.handler);
        });
    },
    beforeDestroy() {
        this.handlers.forEach((h) => {
            window.removeEventListener(h.type, h.handler);
        });
    },
    methods: {
        nextScreen() {
            this.screenIndex = Math.min(this.screenIndex + 1, this.screens.length - 1);
            if (this.screenIndex === this.screens.length - 1 ) {
                document.getElementById('downward-bt').style.display = 'none';
            }
        },
        handleSpaceNextScreen(event) {
            if (event.key === " ") {
                this.nextScreen();
            }
        },
        handleScrollNextScreen(event){
            let downward = event.deltaY > 0;
            if (downward && event.deltaY >= 25) {
                this.nextScreen();
            }
        },
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
