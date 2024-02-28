<template>
<div id="container">
    <LogoComp :size="32"/>
</div>
</template>

<script>
import LogoComp from "@/assets/Logo.vue";

export default {
    name: "LogoMenuBarComp",
    components: {LogoComp},
}
</script>

<style scoped>
#container {
    position: absolute;
    width: 100%;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
