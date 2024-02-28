<template>
    <div id="bg-circle">
        <BottomRightCircle/>
    </div>
</template>

<script>

import BottomRightCircle from "@/assets/BottomRightCircle.vue";

export default {
    name: "BottomRightCircleComp",
    components: {BottomRightCircle},
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
