<template>
    <div class="bg fade-in fade-in-delay-1" id="img-container">
        <img src="@/assets/dragon/dragon.webp" alt="">
    </div>
</template>

<script>
export default {
    name: "DragonComp",
}
</script>

<style scoped>
#img-container {
    background-image: url("@/assets/dragon/dragon.webp");
    mask: linear-gradient(var(--bg-color), 60%, transparent);
}
</style>
