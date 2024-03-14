<template>
    <div class="bg fade-in fade-in-delay-1"
        id="img-container"
        :class="{
            'large-image-container': isLarge,
            'small-image-container': isSmall
        }"
    >
        <img src="@/assets/person/person.webp" alt="" id="inner-img"
            :class="{'hide': isLarge || isSmall}"
        >
    </div>
</template>

<script>
import {large, small} from "@/js/widthLevel";

export default {
    name: "PersonComp",
    data: () => {
        return {
            isLarge: large,
            isSmall: small
        }
    },
}
</script>

<style scoped>
#img-container {
    background-image: url("@/assets/person/person.webp");
}

.large-image-container {
    background-size: cover;
    background-position: bottom right;
    transform: translateY(2%);
}

.small-image-container {
    background-size: cover;
    background-position: bottom right;
    transform: translate(15%, 20%) scale(55%);
    filter: brightness(150%);
    width: 100%;
    height: 100%;
}

.hide {
    display: none;
}
</style>
