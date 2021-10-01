<template>
    <crousel />
    <card />
    <recentport />
    <counterParent />
    <myFooter />
    


</template>
<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import crousel from './crousel.vue'
import card from './card.vue'
import recentport from './recentport.vue'
import counterParent from './counterParent.vue'
import myFooter from './footer.vue'

export default{
    components: { 
        crousel,
        myFooter,
        card,
        recentport,
        counterParent
    },
    name:'home',
    
}
</script>
<style scoped>

</style>
