<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
    <div class="card" style="width: 18rem">
      <img
        v-bind:src="imageSrc"
        class="img-thumbnail"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text"> {{title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recentportSub",
  props:{
      imageSrc:String,
      title: String
  }
};

</script>

<style>
</style>