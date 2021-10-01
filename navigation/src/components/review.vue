<template>
<br><br>
<p style="font-style:italic; font-size:20px">What People Say About Us?</p>


<div class="d-flex justify-content-center">
    <div class="content text-center">

        <div class="ratings">
            <h3>John</h3>
            <span class="product-rating">4.6</span><span>/5</span>
            <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            <div class="rating-text"> <span>46 ratings & 15 reviews</span> </div>
        </div>
    </div>&nbsp;&nbsp;&nbsp;
    <div class="content text-center">

        <div class="ratings">
            <h3>Steve</h3>
            <span class="product-rating">4.6</span><span>/5</span>
            <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            <div class="rating-text"> <span>46 ratings & 15 reviews</span> </div>
        </div>
    </div>
    
</div> <br>
<div class="d-flex justify-content-center">
    <div class="content text-center">

        <div class="ratings">
            <h3>Bill</h3>
            <span class="product-rating">4.6</span><span>/5</span>
            <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            <div class="rating-text"> <span>46 ratings & 15 reviews</span> </div>
        </div>
    </div>&nbsp;&nbsp;&nbsp;
    <div class="content text-center">

        <div class="ratings">
            <h3>Gates</h3>
            <span class="product-rating">4.6</span><span>/5</span>
            <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
            <div class="rating-text"> <span>46 ratings & 15 reviews</span> </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', serif;
    background: #eee
}

.content {
    width: 420px;
    margin-top: 50px
}

.ratings {
    background-color: #fff;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 10px #E0E0E0
}

.product-rating {
    font-size: 50px
}

.stars i {
    font-size: 18px;
    color: #28a745
}

.rating-text {
    margin-top: 10px
}
</style>
