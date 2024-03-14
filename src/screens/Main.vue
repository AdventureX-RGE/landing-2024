<template>
<div class="container fade-in">
    <LogoMenuBarComp/>
    <div id="info-box" class="info-box">
        <span id="title">
            <TitleComp/>
        </span>
        <div id="sep">
            <hr/>
        </div>
        <span id="sub-info" class="sub-info">中国·杭州 2024.7.15-7.19</span>
        <a href="https://hub.adventure-x.org/login" id="start-bt" class="start-bt">
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
    padding: 2px 17px;
}

#sub-info {
    font-family: "PingFang SC", serif;
    font-weight: 400;
    text-align: left;
}

#info-box {
    position: absolute;
    top: -15%;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 3%;
    justify-content: center;
    //align-items: flex-start;
    display: inline-flex;
    flex-shrink: 0;
}

@media screen and (min-width: 500px) {
    .info-box {
        padding-left: 15%;
        align-items: flex-start;
    }

    #sep {
        width: 6%;
    }

    #title {
        width: 460px;
    }

    .sub-info {
        font-size: 28px;
    }

    .start-bt {
        margin-top: 3%;
    }
}

@media screen and (max-width: 500px) {
    .info-box {
        padding-left: 0;
        align-items: center;
    }

    #sep {
        width: 35%;
    }

    #title {
        width: 288px;
    }

    .sub-info {
        font-size: 20px;
    }

    .start-bt {
        margin-top: 10%;
    }
}
</style>
