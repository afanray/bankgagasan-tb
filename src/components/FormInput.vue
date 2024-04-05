<template>
  <div class="container mt-0 mb-5" style="width: 100vw">
    <!-- Hero Header Start -->
    <div class="row align-items-center">
      <div class="col-lg wow fadeInLeft" data-wow-delay="0.1s">
        <form>
          <div class="row g-3">
            <div class="col-lg-12 col-xl-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  placeholder="Nama Depan"
                />
                <label for="name">Nama Depan</label>
              </div>
            </div>
            <div class="col-lg-12 col-xl-6">
              <div class="form-floating">
                <input
                  type="lastname"
                  class="form-control"
                  id="lastname"
                  placeholder="Nama Belakang"
                />
                <label for="lastname">Nama Belakang</label>
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
                <label for="phone">Nomor Hp</label>
              </div>
            </div>
            <div class="col-lg-12 col-xl-6">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
                <label for="email">Email</label>
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
                <label for="message">Tulis laporan anda disini</label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3">Kirim Laporan</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
