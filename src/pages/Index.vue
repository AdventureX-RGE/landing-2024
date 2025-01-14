<template>
  <div id="outer-container" class="container">
    <div id="container" class="container">
      <component :is="currentScreen[screenIndex].screen"/>
    </div>
    <DownwardButtonComp :action="toMainScreen" class="bottom-bt bottom-bt-bounce-animation" id="downward-bt"/>
    <div v-for="(screen, index) in currentScreen" :key="screen.screen.name" class="abs-max-container z-bg">
      <template
          v-if="screenIndex === reuseBackground.index || index === screenIndex">
        <div v-for="bg in screen.bg" :id="bg.name" :key="bg.name">
          <template v-if="reuseBackground.key === bg.name && screenIndex === reuseBackground.index ">
            <component
                :is="bg"
                :key="bg.name"
            />
          </template>
          <template v-else>
            <template v-if="index === screenIndex">
              <component
                  :is="bg"
                  :key="bg.name"
              />
            </template>
          </template>
        </div>
      </template>
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
import DetailScreen from "@/screens/Detail.vue";
// import PartnersScreen from "@/screens/Partners.vue";
import {small} from "@/js/widthLevel";
import DetailDragon from "@/assets/dragon/DetailDragon.vue";
import ActiveScreen from '@/screens/Active.vue'
import PrizeScreen from '@/screens/Prize.vue'

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
        {
          screen: MainScreen,
          bg: [BottomCircleComp, PersonComp]
        },
        {
          screen: DetailScreen,
          bg: [DetailDragon]
        },
        {
          screen: ActiveScreen,
          bg: [],
          isReuseBg: 'DetailDragon'
        },
        {
          screen: PrizeScreen,
          bg: []
        },
        // {
        //   screen: PartnersScreen,
        //   bg: []
        // }
      ],
      screenIndex: 0,
      handlers: [
        {
          type: "load",
          handler: this.finishLoading
        }
      ],
      cookies: {
        hello: "displayHelloTime"
      },
      showHello: true,
      minLoadTime: 5,
      afterMinLoadTime: false,
      startY: 0,
      scrollAccumulate: 0,
      lastScroll: Date.parse(new Date()),
      scrollDelayTime: 2000,
      scrollMinDisplaceMent: 800,
    }
  },
  components: {
    DownwardButtonComp,
  },
  computed: {
    currentScreen() {
      const res = [...this.screens]
      res.splice(1, 2, this.screens[small ? 2 : 1])
      return res
    },
    reuseBackground() {
      if (Array.isArray(this.currentScreen) && !!this.screenIndex) {
        // console.log(this.currentScreen.map(item => !!item.isReuseBg && item.isReuseBg).filter(item => item).join(), 'reuse')
        return {
          key: this.currentScreen.map(item => !!item.isReuseBg && item.isReuseBg).filter(item => item).join(),
          index: this.currentScreen.findIndex(item => !!item.isReuseBg)
        }
      }
      return ''
    }
  },
  created() {
    if (this.$cookies.isKey(this.cookies.hello)) {
      this.showHello = false;
    } else {
      this.$cookies.set(this.cookies.hello, Date.now(), '1d');
      this.showHello = true;
    }
    if (!this.showHello) {
      this.toMainScreen();
    }
    window.onwheel = (e) => {
      e.preventDefault()
      if (!this.showHello) {
        this.scrollAccumulate += e.deltaY;
        if (this.scrollAccumulate > -this.scrollMinDisplaceMent && this.scrollAccumulate < this.scrollMinDisplaceMent) return;
        //console.log(Date.parse(new Date()) - this.lastScroll);
        if (Date.parse(new Date()) - this.lastScroll < this.scrollDelayTime) return;
        this.scrollAccumulate = 0;
        this.lastScroll = Date.parse(new Date());
        if (e.deltaY > 0) {
          this.changePage('increment')
        } else {
          this.changePage('decrement')
        }
      }
    }
    const touchstart = (event) => {
      // event.preventDefault();
      if (!this.showHello) {
        this.startY = event.touches[0].clientY;
      }
    }
    const touchEnd = (e) => {
      // e.preventDefault();
      if (!this.showHello) {
        const distance = e.changedTouches[0].clientY - this.startY;
        if (distance > 10) {
          this.changePage('decrement')
        } else if (distance < -10) {
          this.changePage('increment')
        }
      }
    }
    document.addEventListener('touchstart', touchstart, {passive: false});
    document.addEventListener('touchend', touchEnd, {passive: false});
  },
  mounted() {
    document.getElementById('downward-bt').style.display = 'none';
    this.handlers.forEach((h) => {
      window.addEventListener(h.type, h.handler);
    });
    setTimeout(() => {
      this.afterMinLoadTime = true;
    }, this.minLoadTime * 1000);
  },
  beforeDestroy() {
    this.handlers.forEach((h) => {
      window.removeEventListener(h.type, h.handler);
    });
  },
  methods: {
    changePage(type) {
      switch (type) {
        case 'increment':
          if (this.screenIndex + 1 === this.currentScreen.length) {
            this.screenIndex = this.currentScreen.length - 1
          } else {
            this.screenIndex = this.screenIndex + 1
          }
          break
        case 'decrement':
          if (this.screenIndex - 1 === 0) {
            this.screenIndex = 1
          } else {
            this.screenIndex = this.screenIndex - 1
          }
          break
      }
    },
    toMainScreen() {
      this.screenIndex = 1;
    },
    finishLoading() {
      if (this.afterMinLoadTime) {
        if (this.showHello) {
          this.toMainScreen();
          this.showHello = false;
        }
      } else {
        setTimeout(() => {
          this.finishLoading();
        }, 100);
      }
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
