<template>
<div>
    <RouterLink v-bind:to="to" id="link">{{ title }}</RouterLink>
</div>
</template>

<script>
export default {
    name: "LinkComp",
    props: {
        to: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        }
    }
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
