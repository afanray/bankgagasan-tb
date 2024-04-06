<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />

  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb">
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
    <div class="container text-center py-5" style="max-width: 900px">
      <h1 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
        Kontak Kami
      </h1>
      <ol
        class="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Contact</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <!-- Contact Start -->
  <div class="container-fluid contact">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <!-- <h2 class="display-5 mb-2">Kontak Kami</h2> -->
          <p class="mb-4">
            Pergunakan berbagai alamat kontak berikut untuk mendapatkan
            informasi lebih lanjut tentang Ruang Gagasan TBC.
          </p>
          <form>
            <div class="row g-3">
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label for="name">Your Name</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label for="email">Your Email</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input
                    type="phone"
                    class="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label for="phone">Your Phone</label>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="project"
                    placeholder="Project"
                  />
                  <label for="project">Your Project</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style="height: 160px"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100 py-3">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-light d-flex align-items-center justify-content-center mb-3"
              style="width: 90px; height: 90px; border-radius: 50px"
            >
              <i class="fa fa-home fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Lokasi</h4>
              <p class="mb-0">
                Kedeputian Bidang Pembangunan Manusia, Masyarakat, dan
                Kebudayaan Kementerian Perencanaan Pembangunan Nasional/Bappenas
              </p>
            </div>
          </div>

          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-light d-flex align-items-center justify-content-center mb-3"
              style="width: 90px; height: 90px; border-radius: 50px"
            >
              <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Lokasi</h4>
              <p class="mb-0">
                Kedeputian Bidang PMMK, Kementerian PPN/Bappenas. <br />
                Jl. Taman Suropati No.2, Jakarta 10310
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-light d-flex align-items-center justify-content-center mb-3"
              style="width: 90px; height: 90px; border-radius: 50px"
            >
              <i class="fa fa-envelope-open fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Email</h4>
              <p class="mb-0">sekretariat.pm2k@bappenas.go.id</p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-light d-flex align-items-center justify-content-center mb-3"
              style="width: 90px; height: 90px; border-radius: 50px"
            >
              <i class="fa fa-phone-alt fa-2x text-primary"></i>
            </div>
            <div class="ms-4">
              <h4>Telepon</h4>
              <p class="mb-0">+62 21 3926603</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="rounded h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507334.53258064156!2d106.41589155906107!3d-6.578202150461419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41720e59d2b%3A0x3c98760322e6a486!2sKementerian%20Perencanaan%20Pembangunan%20Nasional%2FBadan%20Perencanaan%20Pembangunan%20Nasional%20(Kementerian%20PPN%2FBappenas)!5e0!3m2!1sid!2sid!4v1712367125017!5m2!1sid!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div class="flex align-content-around mb-4">
            <div class="ms-4 mb-4">
              <h4>Link Terkait</h4>
            </div>
            <div class="ms-4">
              <a href="https://bappenas.go.id/">
                <img src="/lg-bappenas.png" class="img-thumbnail w-50" alt="" />
              </a>
              <!-- <p class="mb-0">
                Kementerian Perencanaan Pembangunan Nasional/Bappenas
              </p> -->
            </div>
          </div>

          <div class="d-flex align-content-lg-start mb-4">
            <div class="ms-4">
              <a href="https://kemkes.go.id/">
                <img src="/kemkes.png" class="img-thumbnail w-50" alt="" />
              </a>
              <!-- <p class="mb-0">Kementerian Kesehatan Republik Indonesia</p> -->
            </div>
          </div>
          <div class="flex align-content-lg-start mb-4">
            <div class="ms-4">
              <a href="https://tbindonesia.or.id/">
                <img src="/tb-id.png" class="img-thumbnail w-50" alt="" />
              </a>
              <!-- <p class="mb-0">TB Indonesia</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact End -->

  <Footer></Footer>
</template>
<script>
export default {};
</script>
