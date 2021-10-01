<template>

<h1>navbar</h1>
<!-- <div class="navigationbar">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="home.vue" style="color:black; padding:0px 100px; font-weight:bold; line-height:50px; margin-right:200px">Home.Page</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar">
                <span class="navbar-toggler-icon" style="color:black;"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }" style="place-content: space-between">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="float: right; margin-right: 20px;">
                    <li class="nav-item">
                        <h3 style="margin-bottom:-20px; color:#767676; font-size:25px"><i class="fas fa-home"></i></h3>

                        <router-link to='/home' class="nav-link" style="color:#00b3b3" >Home</router-link>
                        
                    </li>
                    <li class="nav-item">
                        <h3 style="margin-bottom:-20px; color:#767676; font-size:25px"><i class="fas fa-folder"></i></h3>

                        <router-link to='/services' class="nav-link" style="color: #00b3b3">Services</router-link>
                    </li>
                    <li class="nav-item ">
                        <h3 style="margin-bottom:-20px; color:#767676; font-size:25px"><i class="fas fa-briefcase"></i></h3>
                        <router-link to='/portfolio' class="nav-link" style="color:#00b3b3">Portfolio</router-link>

                    </li>
                    <li class="nav-item">
                        <h3 style="margin-bottom:-20px; color:#767676; font-size:25px"><i class="fas fa-envelope"></i></h3>
                        <router-link to='/ContactUs' class="nav-link" style="color:#00b3b3">Contact Us</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary" type="submit" style="float">Search</button>
                </form>
            </div>
        </div>
    </nav>
</div> -->
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: 'navbar'
}
</script>

<style scoped>

/* .navigationbar {
    background-image: linear-gradient(to right, white, lightblue);
}
nav ul li{
    display: inline-block;
    line-height:50px;
    margin: 0 10px;
}
.nav-item{
    margin-bottom: -20px;
} */

</style>