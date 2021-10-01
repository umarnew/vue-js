<template>
    <crousel />
    <card />
    <recentport />
    <review />
    <counter width="20rem" height="20rem" text="90%" />

    <foot />


</template>
<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import crousel from './crousel.vue'
import card from './card.vue'
import recentport from './recentport.vue'
import counter from './counter.vue'
import review from './review.vue'
import foot from './foot.vue'

export default{
    components: { 
        crousel,
        card,
        recentport,
        counter,
        review,
        foot
    },
    name:'home',
}
</script>
<style scoped>

</style>
