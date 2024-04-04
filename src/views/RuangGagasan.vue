<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />

  <!-- Blog Start -->
  <div class="container-fluid hero-header blog py-5">
    <div class="rotate-img">
      <img src="/sty-1.png" class="img-fluid w-100" alt="" />
      <div class="rotate-sty-2"></div>
    </div>
    <div class="container py-5">
      <div class="rotate-img">
        <img src="/sty-1.png" class="img-fluid w-100" alt="" />
        <div class="rotate-sty-2"></div>
      </div>
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-6 mb-4">Ruang Gagasan</h1>
        <p class="mb-0">Gagasan apa yang kamu akan sampaikan?</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="blog-item">
            <div class="blog-img">
              <img src="/blog-1.png" class="img-fluid w-100" alt="" />
              <div class="blog-info">
                <span><i class="fa fa-clock"></i> Dec 01.2024</span>
                <div class="d-flex">
                  <span class="me-3"> 3 <i class="fa fa-heart"></i></span>
                  <a href="#" class="text-white"
                    >0 <i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-4">Temuan Kasus</h5>
              <p class="mb-4">
                Berikan laporan jika terdapat kasus TB yang kamu temui.
              </p>
              <a class="btn btn-light rounded-pill py-2 px-4" href="#"
                >Laporkan</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="blog-item">
            <div class="blog-img">
              <img src="/blog-2.png" class="img-fluid w-100" alt="" />
              <div class="blog-info">
                <span><i class="fa fa-clock"></i> Dec 01.2024</span>
                <div class="d-flex">
                  <span class="me-3"> 3 <i class="fa fa-heart"></i></span>
                  <a href="#" class="text-white"
                    >0 <i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-4">Aksi Pencegahan (Preventif)</h5>
              <p class="mb-4">
                Kamu punya gagasan terkait pencegahan TBC. Ayo tuliskan disini.
              </p>
              <a class="btn btn-light rounded-pill py-2 px-4" href="#"
                >Tuliskan</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div class="blog-item">
            <div class="blog-img">
              <img src="/blog-3.png" class="img-fluid w-100" alt="" />
              <div class="blog-info">
                <span><i class="fa fa-clock"></i> Dec 01.2024</span>
                <div class="d-flex">
                  <span class="me-3"> 3 <i class="fa fa-heart"></i></span>
                  <a href="#" class="text-white"
                    >0 <i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-4">Pengobatan</h5>
              <p class="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip.
              </p>
              <a class="btn btn-light rounded-pill py-2 px-4" href="#"
                >Read More</a
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div class="blog-item">
            <div class="blog-img">
              <img src="/blog-4.png" class="img-fluid w-100" alt="" />
              <div class="blog-info">
                <span><i class="fa fa-clock"></i> Dec 01.2024</span>
                <div class="d-flex">
                  <span class="me-3"> 3 <i class="fa fa-heart"></i></span>
                  <a href="#" class="text-white"
                    >0 <i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-4">Pemberian Layanan</h5>
              <p class="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip.
              </p>
              <a class="btn btn-light rounded-pill py-2 px-4" href="#"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Blog End -->

  <Footer></Footer>
</template>
<script>
export default {};
</script>
