<template>
<div class="container">
    <div id="container" class="container">
        <HelloScreen/>
    </div>
    <div id="bg-circle">
        <BottomCircleComp/>
    </div>
</div>
</template>

<script>
import HelloScreen from "@/components/Hello.vue";
import BottomCircleComp from "@/assets/BottomCircle.vue";

export default {
    name: "IndexPage",
    components: {BottomCircleComp, HelloScreen}
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#bg-circle {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -3;
}
</style>
