<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Map from "../components/Maps.vue";
</script>

<template>
  <Navbar />
  <!-- Hero Header Start -->

  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb mb-3">
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
      <h1 class="wow fadeInDown" data-wow-delay="0.1s">Dashboard</h1>
      <ol
        class="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Dashboard</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <div class="container align-content-center">
    <div class="row">
      <div class="col-lg card m-1">
        <div id="maps"></div>
      </div>

      <div class="col-xl card m-1">
        <div id="grafik"></div>
      </div>
    </div>
  </div>

  <div class="container align-content-center">
    <div class="row">
      <div class="col-lg card m-1">
        <div id="container"></div>
      </div>

      <!-- <div class="col-xl card m-1">
        <div id="grafik"></div>
      </div> -->
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
(async () => {
  // Prepare random data
  const data = [
    ["11", 23374],
    ["12", 72738],
    ["13", 26829],
    ["14", 31899],
    ["15", 15441],
    ["16", 38940],
    ["17", 8666],
    ["18", 34099],
    ["19", 6823],
    ["21", 13896],
    ["31", 53773],
    ["32", 148069],
    ["33", 92870],
    ["34", 10530],
    ["35", 107547],
    ["36", 38200],
    ["51", 14514],
    ["52", 20830],
    ["53", 21927],
    ["61", 19586],
    ["62", 11007],
    ["63", 17578],
    ["64", 16573],
    ["65", 3275],
    ["71", 10835],
    ["72", 12195],
    ["73", 35210],
    ["74", 10611],
    ["75", 4718],
    ["76", 5020],
    ["81", 7584],
    ["82", 4896],
    ["91", 21096],
    ["92", 7851],
  ];

  // Load the geojson germany map
  // https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/germany.geo.json
  const geojson = await fetch("/geojson/id-prov.json").then((response) =>
    response.json()
  );

  console.log(geojson);

  // Initialize the chart
  Highcharts.mapChart("maps", {
    chart: {
      map: geojson,
    },
    credits: {
      enabled: false,
    },

    title: {
      text: "Beban Kasus TBC Provinsi",
    },

    accessibility: {
      typeDescription: "Map of Indonesia.",
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
        keys: ["kode", "value"],
        joinBy: "kode",
        name: "Beban Kasus TB",
        dataLabels: {
          enabled: true,
          format: "{point.properties.Propinsi}",
        },
      },
    ],
  });

  Highcharts.chart("grafik", {
    chart: {
      type: "bar",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Treatment coverage per Provinsi",
    },
    xAxis: {
      categories: [
        "Aceh",
        "Sumatera Utara",
        "Sumatera Barat",
        "Riau",
        "Jambi",
        "Sumatera Selatan",
        "Bengkulu",
        "Lampung",
        "Kepulauan Bangka Belitung",
        "Kepulauan Riau",
        "DKI Jakarta",
        "Jawa Barat",
        "Jawa Tengah",
        "DI Yogyakarta",
        "Jawa Timur",
        "Banten",
        "Bali",
        "Nusa Tenggara Barat",
        "Nusa Tenggara Timur",
        "Kalimantan Barat",
        "Kalimantan Tengah",
        "Kalimantan Selatan",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Sulawesi Utara",
        "Sulawesi Tengah",
        "Sulawesi Selatan",
        "Sulawesi Tenggara",
        "Gorontalo",
        "Sulawesi Barat",
        "Maluku",
        "Maluku Utara",
        "Papua Barat",
        "Papua",
        "Indonesia",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Goals",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "2022",
        data: [
          52.6, 56.4, 55.3, 42.8, 39.2, 55.5, 40.7, 54.3, 41.5, 41.9, 100.5,
          124.5, 83.4, 58.9, 72.8, 111.1, 31.2, 46.3, 40.1, 65.9, 43.9, 48.7,
          55.5, 53.1, 81.1, 57.2, 68.8, 58.4, 101.5, 58.5, 63.1, 65.5, 43.2, 75,
          74.7,
        ],
      },

      {
        name: "2021",
        data: [
          34.6, 35.3, 35.8, 33.5, 26.3, 40.3, 23.3, 40.2, 25.7, 37.1, 59.3,
          71.3, 51.9, 33.3, 44, 70.5, 244, 34, 26.8, 42.3, 30.2, 26.8, 35.8,
          35.9, 58.4, 38.3, 47.6, 40.9, 63.5, 50.4, 43.6, 41, 30.8, 49.8, 47.1,
        ],
      },

      {
        name: "2020",
        data: [
          32.6, 32.2, 23.5, 31.3, 21.5, 28.4, 18.2, 38.9, 26.9, 34.6, 51.2, 62,
          46.8, 31.5, 44.4, 63.2, 22.9, 30.3, 26.6, 36.5, 25.6, 22.1, 29.1,
          33.1, 50.1, 39.2, 38.8, 32.2, 53.2, 43, 27, 33.8, 22.1, 45.3, 41.7,
        ],
      },
    ],
  });

  Highcharts.chart("container", {
    chart: {
      zoomType: "xy",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Cakupan Imunisasi Dasar Lengkap Tahun 2023",
      align: "left",
    },
    subtitle: {
      text: "Target: " + "90%",
      align: "left",
    },
    xAxis: [
      {
        categories: [
          "Aceh",
          "Sumatera Utara",
          "Sumatera Barat",
          "Riau",
          "Jambi",
          "Sumatera Selatan",
          "Bengkulu",
          "Lampung",
          "Kepulauan Bangka Belitung",
          "Kepulauan Riau",
          "DKI Jakarta",
          "Jawa Barat",
          "Jawa Tengah",
          "DI Yogyakarta",
          "Jawa Timur",
          "Banten",
          "Bali",
          "Nusa Tenggara Barat",
          "Nusa Tenggara Timur",
          "Kalimantan Barat",
          "Kalimantan Tengah",
          "Kalimantan Selatan",
          "Kalimantan Timur",
          "Kalimantan Utara",
          "Sulawesi Utara",
          "Sulawesi Tengah",
          "Sulawesi Selatan",
          "Sulawesi Tenggara",
          "Gorontalo",
          "Sulawesi Barat",
          "Maluku",
          "Maluku Utara",
          "Papua Barat",
          "Papua",
          "Indonesia",
        ],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
        title: {
          text: "Capaian",
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: "Target",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 60,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Capaian",
        type: "column",
        yAxis: 1,
        data: [
          45,
          54,
          54,
          54,
          56,
          67,
          77,
          78,
          87,
          87,
          87,
          78,
          87,
          78,
          34,
          34,
          43,
          34,
          43,
          34,
          34,
          34,
          34,
          34,
          45,
          45,
          67,
          78,
          78,
          78,
          78,
          78,
          78,
          78,
          45,
          ,
        ],
      },
      {
        name: "Target",
        type: "spline",
        data: [
          90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
          90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
          90,
        ],
      },
    ],
  });
})();

export default {
  name: "Home",
  components: { Map },
};
</script>
