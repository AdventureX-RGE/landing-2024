<template>
    <div id="app">
        <router-view></router-view>
        <div id="bg" class="container"></div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
#bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    background-color: var(--bg-color);
}
</style>
