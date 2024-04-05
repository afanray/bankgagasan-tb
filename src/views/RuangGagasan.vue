<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />

  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb mb-2">
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
      <h1 class="display-6 wow fadeInDown" data-wow-delay="0.1s">
        Ruang Gagasan
      </h1>
      <ol
        class="breadcrumb justify-content-center wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item">
          "Menyaring, mengumpulkan aspirasi dari masyarakat tentang
          penanggulangan TB".
        </li>
        <!-- <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Aksi TBC</li> -->
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <!-- Blog Start -->
  <div class="container-fluid hero-header blog py-0 mb-5">
    <div class="container">
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
              <h5 class="mb-4">Temuan Kasus</h5>
              <p class="mb-4">
                Mendengar atau menemui kasus TBC, laporkan disini.
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/laporan"
                >Laporkan disini</a
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
              <h5 class="mb-4">Pencegahan (Preventif)</h5>
              <p class="mb-4">Kamu punya gagasan terkait pencegahan TBC.</p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/pencegahan"
                >Tuliskan disini</a
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
              <h5 class="mb-4">Pengobatan</h5>
              <p class="mb-4">
                Memiliki ide atau gagasan terkait pengobatan TB yang efisien.
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/pengobatan"
                >Tuliskan disini</a
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
              <h5 class="mb-4">Pemberian Layanan</h5>
              <p class="mb-4">
                Menemui kendala dalam pelayanan penanggulangan TB.
              </p>
              <a
                class="btn btn-light rounded-pill py-2 px-4"
                href="/ruang-gagasan/layanan"
                >Laporkan disini</a
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
