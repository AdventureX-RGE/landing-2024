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
                    bg: [PersonComp, DragonComp, BottomRightCircleComp, CloudComp],
                },
            ],
            screenIndex: 0,
        }
    },
    components: {
        DownwardButtonComp,
    },
    methods: {
        nextScreen() {
            this.screenIndex = Math.min(this.screenIndex + 1, this.screens.length);
            if (this.screenIndex === this.screens.length - 1 ) {
                document.getElementById('downward-bt').style.display = 'none';
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
