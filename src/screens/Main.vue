<template>
<div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box">
        <span id="title">
            <TitleComp/>
        </span>
        <div style="width: 6%">
            <hr/>
        </div>
        <span id="sub-info">中国·杭州 2024.7.15-7.19</span>
        <a href="https://hub.adventure-x.org/login" id="start-bt">
            <span id="bt-text">开启变革</span>
        </a>
    </div>
</div>
</template>

<script>
import LogoMenuBarComp from "@/components/LogoMenuBar.vue";
import TitleComp from "@/assets/Title.vue";

export default {
    name: "MainScreen",
    components: {TitleComp, LogoMenuBarComp}
}
</script>

<style scoped>
#start-bt {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(51, 45, 35, 1);
    border: rgba(204, 152, 62, 1) 2px solid;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 3%;
    transition: background-color .3s ease-in-out;
    padding: 10px;
    z-index: 1;
    will-change: background-color;
    text-decoration: none;
    outline: none;
    color: var(--front-color);
}

#start-bt:hover {
    background-color: rgba(102, 90, 70, 1);
}

#bt-text {
    font-family: "PingFang SC", serif;
    font-size: 18px;
    padding: 3px 15px;
}

#sub-info {
    font-family: "PingFang SC", serif;
    font-weight: 400;
    text-align: left;
    font-size: 28px;
}

#info-box {
    position: absolute;
    top: -15%;
    width: 100%;
    height: 100%;
    padding-left: 15%;
    flex-direction: column;
    gap: 3%;
    justify-content: center;
    align-items: flex-start;
    display: inline-flex;
    flex-shrink: 0;
}

#title {
    width: 460px;
    text-align: left;
    color: rgba(255, 199, 102, 1);
}
</style>
