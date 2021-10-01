<template>
<button v-on:click='scrollToTop()'>Top</button>

</template>

<script>
export default {
    name: 'myFooter',
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style>

</style>
