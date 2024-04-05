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
          <h2 class="display-5 mb-2">Kontak Kami</h2>
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
              <h4>Lembaga</h4>
              <p class="mb-0">
                Kementerian Perencanaan Pembangunan Nasional / Badan Perencanaan
                Pembangunan Nasional (Bappenas)
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
                Sekretariat Ruang Gagasan TB Nasional Jl. Taman Suropati No.62
                Jakarta 10310
              </p>
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
              <p class="mb-0">021-3196207</p>
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
              <p class="mb-0">info@example.com</p>
              <p class="mb-0">info@example.com</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="me-4">
              <div
                class="bg-light d-flex align-items-center justify-content-center"
                style="width: 90px; height: 90px; border-radius: 50px"
              >
                <i class="fas fa-share fa-2x text-primary"></i>
              </div>
            </div>
            <div class="d-flex">
              <a
                class="btn btn-lg-square btn-primary rounded-circle me-2"
                href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                class="btn btn-lg-square btn-primary rounded-circle mx-2"
                href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                class="btn btn-lg-square btn-primary rounded-circle mx-2"
                href=""
                ><i class="fab fa-instagram"></i
              ></a>
              <a
                class="btn btn-lg-square btn-primary rounded-circle mx-2"
                href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div class="rounded h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.388683563531!2d106.82761117526991!3d-6.212359860850844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f592130eaefd%3A0x9034f2ef55124adc!2sMenara%20Bappenas!5e0!3m2!1sid!2sid!4v1712171770821!5m2!1sid!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
