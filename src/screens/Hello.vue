<template>
<div id="container" class="container">
    <Transition>
        <div class="head">
            <LogoComp/>
            <div class="catchword">
                <CatchWordComp/>
            </div>
        </div>
    </Transition>
</div>
</template>

<script>
import LogoComp from "@/assets/Logo.vue";
import CatchWordComp from "@/assets/CatchWord.vue";

export default {
    name: "HelloScreen",
    components: {
        CatchWordComp,
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
    width: 460px;
    padding-top: 10%;
}

@keyframes head-respiration {
    0% { opacity: .9 }
    50% { opacity: .5 }
    100% { opacity: .9 }
}
</style>
