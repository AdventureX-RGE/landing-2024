<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";
import PartnerSection from "@/components/PartnerSection.vue";

function resertDom() {
  const box = document.body.querySelector(".box");
  const rightBox = document.body.querySelector(".right");
  const leftBox = document.body.querySelector(".left");
  const level1 = document.body.querySelectorAll(".level1");
  const level2 = rightBox.querySelectorAll(".level2");
  const level3 = leftBox.querySelectorAll(".level3");
  const level4 = rightBox.querySelector(".level4");
  const level5 = rightBox.querySelectorAll(".level5");
  let fullRow = false;

  if (box.clientWidth >= 525) {
    const boxWidth = box.clientWidth / 2 - 15 + "px";

    rightBox.style.width = boxWidth;
    leftBox.style.width = boxWidth;
  } else {
    rightBox.style.width = "100%";
    leftBox.style.width = "100%";
    fullRow = true;
  }

  Array.from(level1).forEach((item) => {
    item.style.width = "100%";
    item.style.height = 20 + (fullRow ? "vh" : "vw");
  });

  Array.from(level3).forEach((item) => {
    item.style.width = (leftBox.clientWidth - 20) / 2 + "px";
    item.style.aspectRatio = "1/1";
  });

  Array.from(level2).forEach((item) => {
    item.style.width = "100%";
    item.style.height = 14 + (fullRow ? "vh" : "vw");

    item.addEventListener('wheel', (e) => {
      e.stopPropagation()
    })
  });

  const data = [...Array.from(rightBox.querySelectorAll(".level1")), ...Array.from(level2)];
  const rightTotalHeight = data.reduce((p, n) => p + n.offsetHeight + 20, 0);
  // 计算右边剩余高度
  const rightRemainHeight = Number((leftBox.offsetHeight - rightTotalHeight).toFixed(0));

  level4.style.width = rightBox.clientWidth / 2 - 20 - 3 + "px";
  level4.style.height = rightRemainHeight + "px";

  Array.from(level5).forEach((item) => {
    item.style.width = rightRemainHeight + "px";
    item.style.height = rightRemainHeight + "px";
  });
}

export default {
  name: "PartnersScreen",
  components: {LogoMenuBarComp, PartnerSection},
  data() {
    return {
      partnerData: [
        {
          "level": 0,
          "logo": '../',
          "name": "线性资本",
          "description": "线性资本成立于 2014 年，聚焦“前沿科技+产业”方向的投资，即以数据智能、数字新基建、新一代机器人技术及传统领域的新技术变革（如生物医疗、材料、能源等）为代表的前沿科技，应用于各个垂直产业大幅提升产业效率，赋能其解决痛点问题，完成产业升级，通过产业价值的大幅度提升实现商业价值的超额回报。我们坚持从早期阶段切入，在项目全生命周期内持续给予支持。目前线性资本共管理十支基金，总管理规模约 20 亿美元，已在早期投资地平线、酷家乐、神策数据、特赞、思灵机器人、数数科技、Rokid、观远数据、斗象科技等超过 120 个创业团队，已投资项目估值合计约 200 亿美元。",
          "website": "xxx"
        },
        {
          "level": 0,
          "logo": "../assets/logo/Frame44.png",
          "name": "线性资本",
          "description": "线性资本成立于 2014 年，聚焦“前沿科技+产业”方向的投资，即以数据智能、数字新基建、新一代机器人技术及传统领域的新技术变革（如生物医疗、材料、能源等）为代表的前沿科技，应用于各个垂直产业大幅提升产业效率，赋能其解决痛点问题，完成产业升级，通过产业价值的大幅度提升实现商业价值的超额回报。我们坚持从早期阶段切入，在项目全生命周期内持续给予支持。目前线性资本共管理十支基金，总管理规模约 20 亿美元，已在早期投资地平线、酷家乐、神策数据、特赞、思灵机器人、数数科技、Rokid、观远数据、斗象科技等超过 120 个创业团队，已投资项目估值合计约 200 亿美元。",
          "website": "xxx"
        },
        {
          "level": 2,
          "logo": "../assets/logo/Frame44.png",
          "name": "线性资本",
          "website": "xxx"
        },
        {
          "level": 2,
          "logo": "../assets/logo/Frame44.png",
          "name": "线性资本",
          "website": "xxx"
        },
        {
          "level": 0,
          "logo": "../assets/logo/Frame44.png",
          "name": "线性资本",
          "description": "线性资本成立于 2014 年，聚焦“前沿科技+产业”方向的投资，即以数据智能、数字新基建、新一代机器人技术及传统领域的新技术变革（如生物医疗、材料、能源等）为代表的前沿科技，应用于各个垂直产业大幅提升产业效率，赋能其解决痛点问题，完成产业升级，通过产业价值的大幅度提升实现商业价值的超额回报。我们坚持从早期阶段切入，在项目全生命周期内持续给予支持。目前线性资本共管理十支基金，总管理规模约 20 亿美元，已在早期投资地平线、酷家乐、神策数据、特赞、思灵机器人、数数科技、Rokid、观远数据、斗象科技等超过 120 个创业团队，已投资项目估值合计约 200 亿美元。",
          "website": "xxx"
        },
        {
          "level": 1,
          "name": "线性资本",
          "logo": "../assets/logo/Frame44.png",
          "description": "线性资本成立于 2014 年，聚焦“前沿科技+产业”方向的投资，即以数据智能、数字新基建、新一代机器人技术及传统领域的新技术变革（如生物医疗、材料、能源等）为代表的前沿科技，应用于各个垂直产业大幅提升产业效率，赋能其解决痛点问题，完成产业升级，通过产业价值的大幅度提升实现商业价值的超额回报。我们坚持从早期阶段切入，在项目全生命周期内持续给予支持。目前线性资本共管理十支基金，总管理规模约 20 亿美元，已在早期投资地平线、酷家乐、神策数据、特赞、思灵机器人、数数科技、Rokid、观远数据、斗象科技等超过 120 个创业团队，已投资项目估值合计约 200 亿美元。",
          "website": "xxx"
        },
        {
          "level": 1,
          "name": "线性资本",
          "logo": "../assets/logo/Frame44.png",
          "description": "线性资本成立于 2014 年，聚焦“前沿科技+产业”方向的投资，即以数据智能、数字新基建、新一代机器人技术及传统领域的新技术变革（如生物医疗、材料、能源等）为代表的前沿科技，应用于各个垂直产业大幅提升产业效率，赋能其解决痛点问题，完成产业升级，通过产业价值的大幅度提升实现商业价值的超额回报。我们坚持从早期阶段切入，在项目全生命周期内持续给予支持。目前线性资本共管理十支基金，总管理规模约 20 亿美元，已在早期投资地平线、酷家乐、神策数据、特赞、思灵机器人、数数科技、Rokid、观远数据、斗象科技等超过 120 个创业团队，已投资项目估值合计约 200 亿美元。",
          "website": "xxx"
        },
        {
          "level": 3,
          "name": "线性资本",
          "logo": "../assets/logo/Frame44.png",
          "website": "xxx"
        },
        {
          "level": 4,
          "logo": "../assets/logo/Frame44.png",
          "website": "xxx"
        },
        {
          "level": 4,
          "logo": "../assets/logo/Frame44.png",
          "website": "xxx"
        }
      ]
    }
  },
  async mounted() {
    this.$nextTick(() => {
      resertDom()
    })
  },
  computed: {
    leftData() {
      return this.partnerData.slice(0, 4)
    },
    rightData() {
      return this.partnerData.slice(4)
    }
  },
}
</script>

<template>
  <div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box" class="info-box">
      <div class="partner-box">
        <div class="banner">
          合作伙伴
        </div>
        <div class="box">
          <div class="inner-box">
            <div class="left box-children">
              <PartnerSection :size="item.level" :logoSrc="item.logo" :title="item.name"
                              v-for="(item,index) in leftData"
                              :key="index">
                <template v-if="item.description">
                  {{ item.description }}
                </template>
              </PartnerSection>
            </div>
            <div class="right box-children">
              <PartnerSection :logo-src="item.logo" :size="item.level" :logoSrc="item.logo"
                              v-for="(item,index) in rightData" :key="index"
                              :title="item.name">
                <template v-if="item.description">
                  {{ item.description }}
                </template>
              </PartnerSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
#info-box {
  position: absolute;
  top: 15%;
  width: 100%;
  height: calc(100% - 15%);
  flex-direction: column;
  flex-shrink: 0;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .partner-box {
    position: absolute;
    margin: auto;
    width: 60%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);


    .banner {
      text-align: left;
      padding-left: 2%;
      position: relative;
      margin-bottom: 40px;
      font-size: 23px;
      font-weight: 600;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 0.5%;
        height: 100%;
        background-color: #FFC766;
      }
    }

    .box {
      width: 100%;
      height: 100%;

      .inner-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .box-children {
          flex-wrap: wrap;
          display: flex;
          justify-content: space-between;
          //align-content: flex-start;
          align-items: stretch;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {

}

@media screen and (min-width: 500px) {

}

@media screen and (min-width: 500px) and (max-width: 1024px) {
  .sub-info {
    font-size: 25px;
  }
}

@media screen and (max-width: 500px) {

}
</style>