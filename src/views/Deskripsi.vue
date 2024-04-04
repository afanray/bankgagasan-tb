<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->
  <div class="hero-header overflow-hidden px-5">
    <div class="rotate-img">
      <img src="../assets/sty-1.png" class="img-fluid w-100" alt="" />
      <div class="rotate-sty-2"></div>
    </div>
    <div class="row gy-5 align-items-center">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <h1 class="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">
          #RuangGagasanTB
        </h1>
        <p class="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
          "Menyaring, mengumpulkan aspirasi dari masyarakat tentang
          penanggulangan TB".
        </p>
        <a
          href="/dashboard"
          class="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
          data-wow-delay="0.7s"
          >Dashboard TB</a
        >
      </div>
      <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
        <img src="/health.svg" class="img-fluid w-100 h-100" alt="" />
      </div>
    </div>
  </div>

  <!-- Service Start -->
  <div class="container-fluid service px-5 py-2">
    <div class="container py-5">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-5 mb-4">Ruang Gagasan</h1>
        <p class="mb-0">
          "Menyaring, mengumpulkan aspirasi dari masyarakat tentang
          penanggulangan TB".
        </p>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="service-item text-center rounded p-4">
            <div class="service-icon d-inline-block bg-light rounded p-4 mb-4">
              <i class="fas fa-compass fa-5x text-primary"></i>
            </div>
            <div class="service-content">
              <h4 class="mb-4">Temuan kasus</h4>
              <p class="display-6 mb-4">7787</p>
              <a
                href="#"
                class="btn btn-light rounded-pill text-primary py-2 px-4"
                >Selengkapnya...</a
              >
            </div>
          </div>
        </div>

        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="service-item text-center rounded p-4">
            <div class="service-icon d-inline-block bg-light rounded p-4 mb-4">
              <i class="fas fa-bell fa-5x text-primary"></i>
            </div>
            <div class="service-content">
              <h4 class="mb-4">Pencegahan</h4>
              <p class="display-6 mb-4">456</p>
              <a
                href="#"
                class="btn btn-light rounded-pill text-primary py-2 px-4"
                >Selengkapnya...</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div class="service-item text-center rounded p-4">
            <div class="service-icon d-inline-block bg-light rounded p-4 mb-4">
              <i class="fa fa-hospital fa-5x text-primary"></i>
            </div>
            <div class="service-content">
              <h4 class="mb-4">Pengobatan</h4>
              <p class="display-6 mb-4">356</p>
              <a
                href="#"
                class="btn btn-light rounded-pill text-primary py-2 px-4"
                >Selengkapnya...</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div class="service-item text-center rounded p-4">
            <div class="service-icon d-inline-block bg-light rounded p-4 mb-4">
              <i class="fa fa-paper-plane fa-5x text-primary"></i>
            </div>
            <div class="service-content">
              <h4 class="mb-4">Pemberian Layanan</h4>
              <p class="display-6 mb-4">235</p>
              <a
                href="#"
                class="btn btn-light rounded-pill text-primary py-2 px-4"
                >Selengkapnya...</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->

  <!-- About Start -->
  <div
    class="container-fluid overflow-hidden px-5 py-2"
    style="margin-top: 2rem"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="RotateMoveLeft">
            <img src="/public/hero-about.svg" class="img-fluid w-70" alt="" />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h4 class="mb-1 text-primary">Tentang Kami</h4>
          <h1 class="display-5 mb-4"></h1>
          <p class="mb-4">
            "Menyaring, mengumpulkan aspirasi dari masyarakat tentang
            penanggulangan TB".
          </p>
          <a href="#" class="btn btn-primary rounded-pill py-3 px-5"
            >Selengkapnya...</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <Footer></Footer>
</template>

<script>
export default {};
</script>
