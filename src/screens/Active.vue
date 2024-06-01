<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";

export default {
  name: "ActiveScreen",
  components: {LogoMenuBarComp},
  data() {
    return {
      language: navigator.language,
      screenWidth: window.innerWidth
    }
  },
}
</script>

<template>
  <div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box" class="info-box"
         :style="language.indexOf('en')>=0 && screenWidth>=500&& {width:'40%',paddingLeft:'10%'}">
      <div class="sub-group">
        <div class="sub-title">{{ $t('extremeHacking') }}</div>
        <div class="sub-info">{{ $t('extremeDetail') }}</div>
      </div>
      <div class="sub-group">
        <div class="sub-title">{{ $t('freeTitle') }}</div>
        <div class="sub-info">{{ $t('freeDescription') }}</div>
      </div>
      <div class="sub-group">
        <div class="sub-title">{{ $t('participantTitle') }}</div>
        <div class="sub-info">{{ $t('participantDescription') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#info-box {
  position: absolute;
  left: 0;
  width: 35%;
  height: 100%;
  flex-direction: column;
  gap: 3%;
  justify-content: center;
  display: inline-flex;
  flex-shrink: 0;
  text-align: left;
}

.sub-group {
  width: 100%;
}

.sub-title {
  width: 100%;
  padding-left: 6%;
  position: relative;
  margin-bottom: 1vw;
}

.sub-title::before {
  content: ''; /* 设置引号内容 */
  display: inline-block;
  width: 2.8%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #FFC766;
  color: #FFC766; /* 设置颜色 */
  margin-right: 5px; /* 设置右边距 */
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
}

.sub-info {
  color: #E6E6E6;
  font-size: 18px;
}

@media screen and (min-width: 1024px) {
  .sub-title {
    font-size: 28px;
  }
}

@media screen and (min-width: 500px) {
  .info-box {
    padding-left: 15%;
    align-items: flex-start;
  }
}

@media screen and (min-width: 500px) and (max-width: 1024px) {
  .sub-title {
    font-size: 25px;
  }
}

@media screen and (max-width: 500px) {
  .info-box {
    padding-left: 0;
    align-items: flex-start;
  }

  .sub-title {
    font-size: 20px;
  }

  #info-box {
    top: -15%;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
  }
}
</style>