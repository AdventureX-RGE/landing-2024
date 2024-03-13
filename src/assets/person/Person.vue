<template>
    <div class="bg fade-in fade-in-delay-1" id="img-container"/>
</template>

<script>
export default {
    name: "PersonComp",
}
</script>

<style scoped>
#img-container {
    background-image: url("@/assets/person/person.webp");
    background-size: cover;
    background-position-y: bottom;
    background-position-x: right;
    overflow: visible;
    transform: translateY(2%);
}
</style>
