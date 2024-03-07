<template>
    <div>
        <RouterLink to="/" id="link">
            <LogoComp :size="32"/>
        </RouterLink>
    </div>
</template>

<script>
import LogoComp from "@/assets/Logo.vue";

export default {
    name: "LogoLinkComp",
    components: {LogoComp},
}
</script>

<style scoped>
#link {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    cursor: pointer;
    transition: .3s ease-in-out;
}

#link:hover {
    color: rgba(204, 152, 62, 1);
}
</style>
