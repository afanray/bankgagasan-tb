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

  <div class="container-fluid hero-header blog py-5 align-content-center">
    <div class="container">
      <div class="rotate-img">
        <img src="/sty-1.png" class="img-fluid w-100" alt="" />
        <div class="rotate-sty-2"></div>
      </div>
    </div>

    <div class="container align-content-center mb-5">
      <div class="row">
        <div class="col-lg">
          <div class="row gy-5 align-items-center">
            <div class="col-lg wow fadeInLeft" data-wow-delay="0.2s">
              <img
                src="/peta-sebaran.png"
                class="img-fluid w-100 h-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="fluis align-content-center py-2 px-2">
    <div class="row">
      <div class="col-lg py-2 px-2">
        <Maps></Maps>

      </div>
    </div>
  </div> -->

  <Footer></Footer>
</template>

<script>
export default {};
</script>
