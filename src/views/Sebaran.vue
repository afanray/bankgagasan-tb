<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Maps from "../components/Maps.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->

  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb mb-0">
    <ul class="breadcrumb-animation">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="container text-center" style="max-width: 900px">
      <h1 class="wow fadeInDown" data-wow-delay="0.1s">Sebaran Kasus TB</h1>
      <ol
        class="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Sebaran TB</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <div class="fluis align-content-center py-2 px-2">
    <div class="row">
      <div class="col-lg py-2 px-2">
        <Maps></Maps>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
export default {};
</script>
