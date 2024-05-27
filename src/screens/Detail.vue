<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";

export default {
  name: "DetailScreen",
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
      <div class="sub-title">{{ $t('detailTitle') }}</div>
      <div class="sub-info">{{ $t('detailSection') }}</div>
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

.sub-title {
  padding-left: 5%;
  position: relative;
}

.sub-title::before {
  content: '“'; /* 设置引号内容 */
  font-size: 60px; /* 设置字体大小 */
  color: gold; /* 设置颜色 */
  margin-right: 5px; /* 设置右边距 */
  position: absolute;
  left: 0;
  top: -30%;
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

  .sub-title {
    padding-left: 4%;
  }

  .sub-title::before {
    font-size: 45px; /* 设置字体大小 */
    left: -1%;
    top: -40%;
  }
}
</style>