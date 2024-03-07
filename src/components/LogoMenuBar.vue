<template>
<div id="container">
    <div class="item" id="logo">
        <LogoLinkComp/>
    </div>
    <div class="item">
        <LinkComp to="about-adx" title="关于AdventureX"/>
    </div>
    <div class="item">
        <LinkComp to="friends" title="合作伙伴"/>
    </div>
    <div class="item">
        <LinkComp to="about-team" title="关于团体"/>
    </div>
    <div class="item">
        <LinkComp to="faq" title="FAQ"/>
    </div>
</div>
</template>

<script>
import LinkComp from "@/components/Link.vue";
import LogoLinkComp from "@/components/LogoLink.vue";

export default {
    name: "LogoMenuBarComp",
    components: {LogoLinkComp, LinkComp},
    mounted() {
        // this.mouseLeave();
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
                    console.log(ele.id);
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
}

#logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    z-index: 1;
    padding: 0 2%;
    list-style-type: none;
}
</style>
