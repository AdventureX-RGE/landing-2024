<template>
  <div>
    <template v-if="!isSmall">
      <div v-if="language.indexOf('zh')>=0" v-html="zhLarge"></div>
      <div v-else v-html="enSmall"></div>
    </template>
    <template v-else>
      <div v-if="language.indexOf('zh')>=0" v-html="zhSmall"></div>
      <div v-else v-html="enSmall"></div>
    </template>
  </div>
</template>

<script>
import {small} from "@/js/widthLevel";
import {enSmall, zhLarge, zhSmall} from '@/assets/epxortSvg'

export default {
  name: "CatchWordComp",
  data: () => {
    return {
      isSmall: small,
      zhSmall: zhSmall,
      zhLarge: zhLarge,
      enSmall: enSmall,
      language: navigator.language
    }
  },
}
</script>

<style scoped>
#text {
  font-family: "Smiley Sans", serif;
  font-style: italic;
  font-weight: bolder;
  line-height: 77px;
  color: rgba(255, 255, 255, 1);
}
</style>
