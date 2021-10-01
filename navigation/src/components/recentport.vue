<template>
<br> <br>
<p style="font-style:italic; font-size:20px">Recent Portfolio</p>
<div class="container">
    <div class="row">
     
        <recentportSub :title='title.title1' :imageSrc='src.src1'/>
        <recentportSub :title='title.title2' :imageSrc='src.src2'/>
        <recentportSub :title='title.title3' :imageSrc='src.src3'/>
        <recentportSub :title='title.title4' :imageSrc='src.src4'/>
    </div>
    <div>
        <button style="margin-top:5px; color:lightskyblue; background-color:dodgerblue;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>
        <button style="margin-top:5px; color:lightskyblue; background-color:dodgerblue;">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    </div>

</div>
</template>

<script>
import recentportSub from './recentportSub.vue'
export default {
    name: 'recentport',
    components:{
        recentportSub
    },
    data()
    {
        return{
            title: {
                title1: "The Poor Guy",
                title2: 'Cow Boy',
                title3: "Pinky Baloon",
                title4: "John Donga"
            },
            src:{
                src1:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
                src2:"https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
                src3:"https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                src4:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            }

        }
    }

}
</script>

<style>

</style>
