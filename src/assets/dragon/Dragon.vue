<template>
    <div class="bg fade-in fade-in-delay-1" id="container">
        <img src="@/assets/dragon/dragon.webp" alt="">
    </div>
</template>

<script>
export default {
    name: "DragonComp",
}
</script>

<style scoped>
#container {
    mask: linear-gradient(var(--bg-color), 60%, transparent);
}
</style>
