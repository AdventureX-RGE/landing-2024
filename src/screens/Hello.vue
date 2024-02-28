<template>
<div id="container" class="container">
    <div class="head">
        <LogoComp/>
        <h1 class="catchword">重新将创造变为与世界对抗的武器 &nbsp; :)</h1>
    </div>
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
    animation: head-respiration 3s ease-in-out infinite;
}

.catchword {
    font-family: "Smiley Sans", serif;
    font-style: italic;
    font-weight: bolder;
    //font-size: 64px;
    line-height: 77px;
}

@keyframes head-respiration {
    0% { opacity: .9 }
    50% { opacity: .5 }
    100% { opacity: .9 }
}
</style>
