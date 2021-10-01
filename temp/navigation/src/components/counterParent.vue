<template>

<div>
    <br><br>
<counter width="20rem" height="20rem" text="10%" :activeCount="10" />

<!-- <counter width="20rem" height="20rem" text="20%" :activeCount="20" />

<counter width="20rem" height="20rem" text="50%" :activeCount="50" />

<counter width="20rem" height="20rem" text="40%" :activeCount="40" /> -->
</div>
<br><br>
</template>

<script>
import counter from './counter.vue'
export default {
    name: 'counterParent',
    components: {
        counter
    }
}
</script>

<style>

</style>
