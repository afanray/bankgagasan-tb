<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Map from "../components/Maps.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->

  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb mb-3">
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
      <h1 class="wow fadeInDown" data-wow-delay="0.1s">Aksi TBC</h1>
      <ol
        class="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Aksi TBC</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <Footer></Footer>
</template>

<script>
export default {
  name: "Home",
  components: { Map },
};
</script>
