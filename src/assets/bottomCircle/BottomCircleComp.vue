<template>
    <div class="bg-circle" id="img-container"
        :class="{'fade-in': isSmall}"
    >
        <img src="@/assets/bottomCircle/bottomCircle.webp" alt="">
    </div>
</template>

<script>
import {small} from "@/js/widthLevel";

export default {
    name: "BottomCircleComp",
    data: () => {
        return {
            isSmall: small
        }
    }
}
</script>

<style scoped>
#img-container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
}

#img-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    object-fit: cover;
}

</style>
