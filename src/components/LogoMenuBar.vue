<template>
<div id="container" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <LogoComp :size="32" id="logo" class="item"/>
    <div class="item">
        关于AdventureX
    </div>
    <div class="item">
        合作伙伴
    </div>
    <div class="item">
        关于团体
    </div>
    <div class="item">
        FAQ
    </div>
</div>
</template>

<script>
import LogoComp from "@/assets/Logo.vue";

export default {
    name: "LogoMenuBarComp",
    components: {LogoComp},
    mounted() {
        this.mouseLeave();
    },
    methods: {
        mouseEnter() {
            document.querySelectorAll('.item').forEach((ele) => {
                if (ele.id !== "logo") {
                    ele.style.display = '';
                }
            });
        },
        mouseLeave() {
            document.querySelectorAll('.item').forEach((ele) => {
                if (ele.id !== "logo") {
                    ele.style.display = 'none';
                }
            });
        }
    }
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
    flex-direction: row;
    transition: 1s ease-in-out;
}

#logo {
    width: auto;
}

.item {
    z-index: 1;
    padding: 0 2%;
}
</style>
