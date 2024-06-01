<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";

export default {
  name: "PrizeScreen",
  components: {LogoMenuBarComp},
  data() {
    return {
      screenWidth: window.screen.width,
      subTitle: null,
      subInfo: null,
      subExplanation: null,
      isInit: true
    }
  },
  mounted() {
    if (this.isInit) {
      this.resizeFontSize()
      this.isInit = false
    } else {
      window.removeEventListener('resize', this.resizeFontSize)
    }
    window.addEventListener('resize', this.resizeFontSize)
  },
  methods: {
    resizeFontSize() {
      const infoBox = document.body.querySelector('#info-box')
      const title = document.body.querySelector('.sub-title')
      const info = document.body.querySelector('.sub-info')
      const explanation = document.body.querySelector('.sub-explanation')
      if (!!infoBox && !!title && !!info && !!explanation) {
        const titleSize = infoBox.clientWidth / 10
        const infoSize = infoBox.clientWidth / 16
        const explanationSize = infoBox.clientWidth / 35
        title.style.fontSize = `${titleSize > 102 ? 102 : titleSize}px`
        info.style.fontSize = `${infoSize > 51 ? 51 : infoSize}px`
        explanation.style.fontSize = `${explanationSize > 12 ? 12 : explanationSize}px`
      }
    }
  },
}
</script>

<template>
  <div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box" class="info-box">
      <div class="sub-title" ref="subTitle">1, 000, 000+ RMB</div>
      <div class="sub-info" ref="subInfo">{{ $t('prize') }}</div>
      <div class="sub-explanation" ref="subExplanation">*这计算了所有现金、代金券、或其他形式的奖励</div>
    </div>
  </div>
</template>

<style scoped>
#info-box {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 3%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-shrink: 0;
}

.sub-title {
  font-family: "SF Pro", sans-serif;
  font-weight: 700;
  background: linear-gradient(to right, #E5A22F, #FF7324);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-info {
  font-family: "PingFang SC", sans-serif;
}

.sub-explanation {
  position: absolute;
  bottom: 10%;
  justify-self: flex-end;
  color: #999999;
}

@media screen and (min-width: 1024px) {

}

@media screen and (min-width: 500px) {

}

@media screen and (min-width: 500px) and (max-width: 1024px) {

}

@media screen and (max-width: 500px) {

}
</style>