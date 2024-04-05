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

  <div class="fluis align-content-center py-5 px-5">
    <div class="row">
      <!-- <div class="col-lg py-5 px-5"> -->
      <!-- <Maps></Maps> -->
      <!-- <div id="maps"></div> -->
      <!-- </div> -->

      <div class="col-xl card m-1">
        <div id="container"></div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
(async () => {
  // Prepare random data
  const data = [
    ["DE.SH", 728],
    ["DE.BE", 710],
    ["DE.MV", 963],
    ["DE.HB", 541],
    ["DE.HH", 622],
    ["DE.RP", 866],
    ["DE.SL", 398],
    ["DE.BY", 785],
    ["DE.SN", 223],
    ["DE.ST", 605],
    ["DE.NW", 237],
    ["DE.BW", 157],
    ["DE.HE", 134],
    ["DE.NI", 136],
    ["DE.TH", 704],
    ["DE.", 361],
  ];

  // Load the geojson germany map
  const geojson = await fetch("/public/geojson/id-prov.json").then((response) =>
    response.json()
  );

  // Initialize the chart
  Highcharts.mapChart("container", {
    chart: {
      map: geojson,
    },

    title: {
      text: "Sebaran Kasus TBC",
    },

    accessibility: {
      typeDescription: "Provinsi Indonesia.",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      tickPixelInterval: 100,
    },

    series: [
      {
        data: data,
        keys: ["code_hasc", "value"],
        joinBy: "code_hasc",
        name: "Random data",
        dataLabels: {
          enabled: true,
          format: "{point.properties.postal}",
        },
      },
    ],
  });
})();
export default {};
</script>
