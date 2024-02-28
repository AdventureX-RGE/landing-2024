<template>
    <div id="bg-circle">
        <BottomCircle></BottomCircle>
    </div>
</template>

<script>
import BottomCircle from "@/assets/_BottomCircle.vue";

export default {
    name: "BottomCircleComp",
    components: {BottomCircle}
}
</script>

<style scoped>
#bg-circle {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    mask-image: linear-gradient(transparent, transparent, var(--bg-color));
}
</style>
