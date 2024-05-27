<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";

export default {
  name: "PrizeScreen",
  components: {LogoMenuBarComp},
  data() {
    return {
      screenWidth: window.screen.width
    }
  },
}
</script>

<template>
  <div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box" class="info-box">
      <div class="sub-title">1, 000, 000+ RMB</div>
      <div class="sub-info">{{ $t('prize') }}</div>
      <div class="sub-explanation">*这计算了所有现金、代金券、或其他形式的奖励</div>
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
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  text-align: left;
  padding-top: 15%;
}

.sub-title {
  font-family: "SF Pro", sans-serif;
  font-weight: 700;
  background: linear-gradient(to right, #E5A22F, #FF7324);
  font-size: 102px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-info {
  font-family: "PingFang SC", sans-serif;
  font-size: 35px;
}

.sub-explanation {
  position: absolute;
  bottom: 25%;
  justify-self: flex-end;
  color: #999999;
  font-size: 14px;
}

@media screen and (min-width: 1024px) {

}

@media screen and (min-width: 500px) {

}

@media screen and (min-width: 500px) and (max-width: 1024px) {
  .sub-title {
    font-size: 108px;
  }
}

@media screen and (max-width: 500px) {
  #info-box {
    padding-top: 45%;
  }

  .sub-title {
    font-size: 40px;
  }

  .sub-info {
    font-size: 20px;
  }

  .sub-explanation {
    font-size: 12px;
  }
}
</style>