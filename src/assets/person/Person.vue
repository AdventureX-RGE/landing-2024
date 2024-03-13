<template>
    <div class="bg fade-in fade-in-delay-1" id="img-container">
        <img src="@/assets/person/person.webp" alt="" id="inner-img">
    </div>
</template>

<script>
export default {
    name: "PersonComp",
    methods: {
        resetStyle() {
            let width = document.body.clientWidth;
            let img = document.querySelector('#inner-img');
            if (width > 1024) {
                img.style.display = 'none';
                img.parentElement.classList.add('large-image-container');
            } else {
                img.style.display = '';
                img.parentElement.classList.remove('large-image-container');
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.resetStyle);
        this.resetStyle();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resetStyle)
    }
}
</script>

<style scoped>
#img-container {
    background-image: url("@/assets/person/person.webp");
}

.large-image-container {
    background-size: cover;
    background-position-y: bottom;
    background-position-x: right;
    overflow: visible;
    transform: translateY(2%);
}
</style>
