<template>
<div class="container">
    <LogoMenuBarComp/>
    <div id="info-box">
        <span id="title">ADVENTURE X</span>
        <div style="width: 10%">
            <hr/>
        </div>
        <span id="sub-info">中国·杭州 2024.7.15-7.19</span>
        <div id="start-bt">开启变革</div>
    </div>
</div>
</template>

<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";

export default {
    name: "MainScreen",
    components: {LogoMenuBarComp}
}
</script>

<style scoped>
#start-bt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 3%;
    background: rgba(51, 45, 35, 1);
    border: rgba(204, 152, 62, 1) 2px solid;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 3%;
    transition: .3s ease-in-out;
    font-family: "PingFang SC", serif;
    padding: 10px;
    z-index: 1;
}

#start-bt:hover {
    background: rgba(102, 90, 70, 1);
}

#sub-info {
    font-family: "PingFang SC", serif;
    font-size: large;
    font-weight: 400;
    //line-height: 62px;
    text-align: left;
}

#info-box {
    width: 100%;
    height: 100%;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    gap: 3%;
    justify-content: center;
    align-items: flex-start;
}

#title {
    font-family: "Dune Rise", serif;
    font-size: xxx-large;
    font-weight: 400;
    //line-height: 74px;
    text-align: left;
    color: rgba(255, 199, 102, 1);
}
</style>
