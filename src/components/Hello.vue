<template>
<div id="container" class="container">
    <div class="head" style="order: 2">
        <LogoComp :side="128"/>
        <h1 class="catchword">重新将创造变为与世界对抗的武器 &nbsp; :)</h1>
    </div>
    <div class="head-bg container"></div>
</div>
</template>

<script>
import LogoComp from "@/assets/Logo.vue";

export default {
    name: "HelloScreen",
    components: {
        LogoComp
    }
}
</script>

<style scoped>
#container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.head-animation {
    animation: head-respiration 3s ease infinite;
}

.head-bg {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--bg-color);
    mix-blend-mode: multiply;
    z-index: -1;
    animation: head-bg-respiration 5s ease infinite;
}

.catchword {
    font-family: "Smiley Sans", serif;
    font-style: italic;
    font-weight: bolder;
    //font-size: 64px;
    line-height: 77px;
    color: rgba(255, 255, 255, 1);
}

@keyframes head-respiration {
    0% { opacity: .6 }
    50% { opacity: .8 }
    100% { opacity: .6 }
}

@keyframes head-bg-respiration {
    0% { opacity: 1 }
    50% { opacity: .5 }
    100% { opacity: 1 }
}
</style>
