<template>
<div id="outer-container" class="container">
    <div id="container" class="container">
        <component :is="screens[screenIndex].screen"/>
    </div>
    <DownwardButtonComp :action="nextScreen" class="bottom-bt bottom-bt-bounce-animation" id="downward-bt"/>
    <div v-for="bg in this.screens[this.screenIndex].bg" v-bind:key="bg.name" id="bg-container">
        <component :is="bg"/>
    </div>
</div>
</template>

<script>
import HelloScreen from "@/screens/Hello.vue";
import MainScreen from "@/screens/Main.vue";
import BottomCircleComp from "@/assets/BottomCircleComp.vue";
import BottomRightCircleComp from "@/assets/BottomRightCircleComp.vue";
import DownwardButtonComp from "@/assets/DownwardButton.vue";

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
                    bg: [BottomRightCircleComp],
                },
            ],
            screenIndex: 0,
        }
    },
    components: {
        DownwardButtonComp,
        BottomRightCircleComp,
        BottomCircleComp,
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

#bg-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
