<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> <i class="far fa-lightbulb" style=" color:green "></i> &nbsp;&nbsp; Creative</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-pencil-alt" style=" color:green "></i> &nbsp;&nbsp; Clean</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa fa-user"  style=" color:green "></i> &nbsp;&nbsp;24X7 Support</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>



        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div class="card" style="width:288px; height:171px">
                <div class="card-body">
                    <h5 class="card-title"> <i class="fas fa-mobile-alt" style=" color:green "></i>
                        &nbsp;&nbsp; Responsive</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>

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
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: 'card'

}
</script>

<style>
i {
color: chartreuse;
}
</style>
