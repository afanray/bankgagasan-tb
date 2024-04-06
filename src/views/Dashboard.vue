<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->
  <div class="hero-header overflow-hidden px-5 mb-0">
    <div class="rotate-img">
      <img src="/sty-1.png" class="img-fluid w-100" alt="" />
      <div class="rotate-sty-2"></div>
    </div>
    <div class="row gy-5 align-items-center">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <h1 class="display-6 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">
          Ruang Gagasan
        </h1>
        <p class="fs-5 mb-4 wow fadeInUp" data-wow-delay="0.5s">
          Pemerintah terus berupaya maksimal dalam kegiatan preventif & kuratif
          TBC. Penanganan TBC Nasional dapat berjalan optimal dengan dukungan
          kolektif bersama, sehingga anda dapat berperan aktif dalam penanganan
          TBC Nasional dengan cara menyampaikan gagasan-gagasan anda dalam menu
          Ruang Gagasan pada portal ini. Mari kita dukung Indonesia Sehat menuju
          Indonesia Emas 2045!
        </p>
      </div>
      <div
        class="col-lg-6 wow align-content-center fadeInRight"
        data-wow-delay="0.2s"
      >
        <img src="/ilustrasi-bg.png" class="img-fluid w-100 h-100" alt="" />
      </div>
    </div>
  </div>

  <!-- Blog Start -->
  <div class="container-fluid hero-header blog py-0 mb-5">
    <div class="container">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-5 mb-4">Kirim Gagasan</h1>
        <p class="mb-0">
          "Menyaring, mengumpulkan aspirasi dari masyarakat tentang
          penanggulangan TB".
        </p>
      </div>
      <div class="rotate-img">
        <img src="/sty-1.png" class="img-fluid w-100" alt="" />
        <div class="rotate-sty-2"></div>
      </div>
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      ></div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="blog-item">
            <div class="blog-img">
              <img src="/blog-1.png" class="img-fluid w-100" alt="" />
              <div class="blog-info">
                <span><i class="fa fa-bookmark"></i> 1200</span>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-2">Temuan Kasus</h5>
              <p class="mb-2">
                Mendengar atau menemui kasus TBC, laporkan disini.
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/laporan"
                >Kirim Gagasan</a
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
                <span><i class="fa fa-bookmark"></i> 234</span>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-2">Pencegahan (Preventif)</h5>
              <p class="mb-2">Kamu punya gagasan terkait pencegahan TBC.</p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/pencegahan"
                >Kirim Gagasan</a
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
                <span><i class="fa fa-bookmark"></i> 2345</span>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-2">Pengobatan</h5>
              <p class="mb-2">
                Memiliki ide atau gagasan terkait pengobatan TB yang efisien.
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/pengobatan"
                >Kirim Gagasan</a
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
                <span><i class="fa fa-bookmark"></i> 4567</span>
              </div>
            </div>
            <div class="blog-content text-dark border p-4">
              <h5 class="mb-2">Pemberian Layanan</h5>
              <p class="mb-2">
                Memberikan gagasan dalam meningkatkan pelayanan penanggulangan
                TBC
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/layanan"
                >Kirim Gagasan</a
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
