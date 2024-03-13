<template>
<div id="outer-container" class="container">
    <div id="container" class="container">
        <component :is="screens[screenIndex].screen"/>
    </div>
    <DownwardButtonComp :action="nextScreen" class="bottom-bt bottom-bt-bounce-animation" id="downward-bt"/>

    <div v-for="(screen, index) in this.screens" :key="screen.screen.name" class="abs-max-container z-bg">
        <div v-if="index === screenIndex">
            <div v-for="bg in screen.bg" :id="bg.name" :key="bg.name">
                <component
                    :is="bg"
                    :key="bg.name"
                />
            </div>
        </div>
        <div v-else>
            <div v-for="bg in screen.bg" :id="bg.name" :key="bg.name" class="hidden">
                <component
                    :is="bg"
                />
            </div>
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
                },
                {
                    type: "load",
                    handler: this.finishLoading
                }
            ],
            cookies: {
                hello: "displayHelloTime"
            },
            showHello: true
        }
    },
    components: {
        DownwardButtonComp,
    },
    beforeMount() {
        if (this.$cookies.isKey(this.cookies.hello)) {
            this.showHello = false;
        } else {
            this.$cookies.set(this.cookies.hello, Date.now(), '1d');
            this.showHello = true;
        }
    },
    mounted() {
        if (!this.showHello) {
            this.nextScreen();
        }
        document.getElementById('downward-bt').style.display = 'none';
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
        handleScrollNextScreen(event) {
            let downward = event.deltaY > 0;
            if (downward && event.deltaY >= 25) {
                this.nextScreen();
            }
        },
        finishLoading() {
            this.nextScreen();
        }
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
