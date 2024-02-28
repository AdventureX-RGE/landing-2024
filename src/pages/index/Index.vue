<template>
<div class="container">
    <div id="container" class="container">
        <HelloScreen/>
    </div>
    <BottomCircleComp/>
</div>
</template>

<script>
import HelloScreen from "@/components/Hello.vue";
import BottomCircleComp from "@/assets/BottomCircleComp.vue";

function nextPageEvent() {

}

export default {
    name: "IndexPage",
    components: {
        BottomCircleComp,
        HelloScreen
    },
    mounted() {
        nextPageEvent();
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
