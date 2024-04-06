<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->

  <!-- Service Start -->
  <div class="container-fluid service px-5 py-5">
    <div class="container py-5">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-5 mb-4">Sekilas TBC</h1>
        <p class="mb-0">
          "Menyaring dan mengumpulkan aspirasi dari masyarakat tentang
          penanggulangan TBC"
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md col-lg wow fadeInUp py-2" data-wow-delay="0.3s">
          <a href="/kasus">
            <div class="service-item text-center rounded p-4">
              <div
                class="service-icon d-inline-block bg-light rounded p-4 mb-4"
              >
                <i class="fas fa-compass fa-5x text-primary"></i>
              </div>

              <div class="service-content">
                <div class="btn btn-light rounded-pill text-primary py-2 px-4">
                  Kasus TB
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-md wow fadeInUp py-2" data-wow-delay="0.3s">
          <a href="/beban-kasus">
            <div class="service-item text-center rounded p-4">
              <div
                class="service-icon d-inline-block bg-light rounded p-4 mb-4"
              >
                <i
                  class="fas fa-bell fa-5x text-primary"
                  style="color: #37c6f3"
                ></i>
              </div>

              <div class="service-content">
                <div class="btn btn-light rounded-pill text-primary py-2 px-4">
                  Beban Kasus TB
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md wow fadeInUp py-2" data-wow-delay="0.5s">
          <a href="/sebaran">
            <div class="service-item text-center rounded p-4">
              <div
                class="service-icon d-inline-block bg-light rounded p-4 mb-4"
              >
                <i
                  class="fa fa-map fa-5x text-primary"
                  style="color: #51b848"
                ></i>
              </div>

              <div class="service-content">
                <div class="btn btn-light rounded-pill text-primary py-2 px-4">
                  Sebaran Kasus
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md wow fadeInUp py-2" data-wow-delay="0.7s">
          <a href="/cakupan-imunisasi">
            <div class="service-item text-center rounded p-4">
              <div
                class="service-icon d-inline-block bg-light rounded p-4 mb-4"
              >
                <i
                  class="fa fa-syringe fa-5x text-primary"
                  style="color: #ca9830"
                ></i>
              </div>

              <div class="service-content">
                <div class="btn btn-light rounded-pill text-primary py-2 px-4">
                  Cakupan Imunisasi
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-md wow fadeInUp py-2" data-wow-delay="0.7s">
          <a href="/riset">
            <div class="service-item text-center rounded p-4">
              <div
                class="service-icon d-inline-block bg-light rounded p-4 mb-4"
              >
                <i
                  class="fa fa-rocket fa-5x text-primary"
                  style="color: #ffd43b"
                ></i>
              </div>

              <div class="service-content">
                <div class="btn btn-light rounded-pill text-primary py-2 px-4">
                  Riset TB
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->

  <!-- aksi Start -->
  <div class="container-fluid service px-5 py-5">
    <div class="container">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-5 mb-4">Rencana Aksi Penanggulangan</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md col-lg wow fadeInUp py-2" data-wow-delay="0.3s">
          <div class="container align-content-center mb-5">
            <div class="row">
              <div class="col-lg">
                <div class="row gy-5 align-items-center">
                  <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                    <img
                      src="/aksi-3.png"
                      class="img-fluid w-100 h-100"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                    <img
                      src="/aksi-6.png"
                      class="img-fluid w-100 h-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- aksi End -->

  <!-- video Start -->
  <div class="container-fluid service px-5">
    <div class="container">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 900px"
      >
        <h1 class="display-5 mb-4">Simak Informasi TBC</h1>
      </div>

      <div class="container align-content-center mb-5">
        <div class="row gy-5 align-items-center">
          <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <iframe
              class="w-100"
              height="350"
              src="https://www.youtube.com/embed/CDV3pXcc_qg?si=_NUcUEcyCAxSNkSY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <h4 class="mb-1 text-primary">Tentang Kami</h4>
            <p class="mb-4">
              Gagasan TBC adalah ruang publik untuk bertemu, mendapatkan
              informasi akurat, serta berbagi gagasan untuk pencegahan dan
              pengobatan TBC yang efektif. Dalam portal Gagasan TBC ini terdapat
              4 menu utama: (1) Ruang Gagasan; (2) Aksi TBC; (3) Info TBC; dan
              (4) Kontak. Kita dapat menyimak berita terkini, data statistik,
              serta konten edukasi dalam Info TBC. Seiring dengan perkembangan
              teknologi dan tantangan yang dihadapi, Pemerintah terus berupaya
              maksimal dalam kegiatan preventif & kuratif TBC. Upaya tersebut
              tercantum dalam Strategi Rencana Aksi pada menu Aksi TBC.
              Penanganan TBC Nasional dapat berjalan optimal dengan dukungan
              kolektif bersama, sehingga anda dapat berperan aktif dalam
              penanganan TBC Nasional dengan cara menyampaikan gagasan-gagasan
              anda dalam menu Ruang Gagasan pada portal ini. Mari kita dukung
              Indonesia Sehat menuju Indonesia Emas 2045!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- video End -->

  <Footer></Footer>
</template>

<script>
export default {};
</script>
