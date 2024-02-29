<template>
<div id="outer-container" class="container">
    <div id="container" class="container">
        <component :is="screens[screenIndex].screen"/>
    </div>
    <DownwardButtonComp :action="nextScreen" class="bottom-bt bottom-bt-bounce-animation" id="downward-bt"/>
    <component :is="bg" v-for="bg in this.screens[this.screenIndex].bg" v-bind:key="bg.name"/>
</div>
</template>

<script>
import HelloScreen from "@/screens/Hello.vue";
import MainScreen from "@/screens/Main.vue";
import BottomCircleComp from "@/assets/BottomCircleComp.vue";
import BottomRightCircleComp from "@/assets/BottomRightCircleComp.vue";
import DownwardButtonComp from "@/assets/DownwardButton.vue";
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
