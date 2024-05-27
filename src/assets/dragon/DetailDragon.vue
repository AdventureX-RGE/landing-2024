<script>

import {small, middle} from "@/js/widthLevel";

export default {
  name: "DetailDragon",
  data() {
    return {
      isSmall: small,
      isMiddle: middle
    }
  },
  created() {
    window.onresize = () => {
      const {middle, small} = require('@/js/widthLevel')
      this.isMiddle = middle
      this.isSmall = small
      console.log(`isMiddle:${this.isMiddle}, isSmall:${this.isSmall}`)
    }
  },
  mounted() {
  }
}
</script>

<template>
  <div class="bg fade-in fade-in-delay-1 bg-small" id="img-container">
    <img src="@/assets/dragon/dragon2.png" alt="" :class="{'small-screen':isSmall,'middle-screen':isMiddle}">
  </div>
</template>

<style scoped>
.bg {
  max-height: 100vh;
  overflow: hidden;
}

.bg-small {
  height: 100vh;
}

.bg img {
  width: 75%;
  right: 0;
}

.bg img.small-screen {
  position: absolute;
  width: auto;
  height: auto;
  left: 15%;
}

.bg img.middle-screen {
  position: absolute;
  width: auto;
  height: auto;
  left: 67%;
}

@media screen and (max-width: 1024px) {
  .bg img.small-screen, .bg img.middle-screen {
    visibility: visible;
  }

}
</style>