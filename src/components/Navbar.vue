<!-- <template>
  <div class="fluid">
    <nav class="navbar navbar-expand-sm p-4" style="background-color: #03c988">
      <div class="col">
        <a class="navbar-brand" href="/">
          <img
            src="/public/brand.svg"
            alt="Logo"
            width="150"
            height="60"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
      <div class="col align-items-start">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="/deskripsi"
                >Deskripsi</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/maps">Pemetaan</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ruang Gagasan
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/ruang-gagasan/laporan"
                    >Temuan Kasus (Pelaporan)</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/ruang-gagasan/pencegahan"
                    >Pencegahan (Preventif)</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="/ruang-gagasan/pengobatan"
                    >Pengobatan</a
                  >
                </li>

                <li>
                  <a class="dropdown-item" href="/ruang-gagasan/layanan"
                    >Pemberian Layanan</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-light text-white" type="submit">
              Kontak
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template> -->

<template>
  <div class="container-fluid header position-relative overflow-hidden p-0">
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0"
    >
      <a href="/" class="navbar-brand p-0">
        <img src="/logobg2.png" class="img-thumbnail" alt="" />
        <!-- <h1 class="display-6 text-primary m-0"> -->

        <!-- <i class="fas fa-home me-3"></i>BankGagasan -->
        <!-- </h1> -->
        <!-- <img src="img/logo.png" alt="Logo"> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a href="/" class="nav-item nav-link active">Deskripsi</a>
          <a href="/dashboard" class="nav-item nav-link">Dashboard</a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Ruang Gagasan</a
            >
            <div class="dropdown-menu m-0">
              <a href="/ruang-gagasan/laporan" class="dropdown-item"
                >Temuan Kasus (Pelaporan)</a
              >
              <a href="/ruang-gagasan/pencegahan" class="dropdown-item"
                >Pencegahan (Preventif)</a
              >
              <a href="/ruang-gagasan/pengobatan" class="dropdown-item"
                >Pengobatan</a
              >
              <a href="/ruang-gagasan/layanan" class="dropdown-item"
                >Pemberian Layanan</a
              >
            </div>
          </div>
          <!-- <a
            href="/kontak"
            class="nav-item nav-link btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4"
            >Contact Us</a
          > -->
        </div>
        <a
          href="/kontak"
          class="btn btn-primary rounded-pill text-white py-2 px-4"
          >Kontak kami</a
        >
      </div>
    </nav>
  </div>
  <!-- Navbar & Hero End -->
</template>

<script>
export default {
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>
