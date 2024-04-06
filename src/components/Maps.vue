<script setup>
import {
  LMap,
  LControlLayers,
  LTileLayer,
  LMarker,
  LGeoJson,
} from "@vue-leaflet/vue-leaflet";
import { latLng, featureGroup, geoJson } from "leaflet";
</script>

<template>
  <div class="">
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />

      <l-geo-json
        :name="'Beban Kasus TB 2022'"
        v-if="show"
        :geojson="geojson"
        :options="options"
        layer-type="overlay"
        :options-style="styleFunction"
      />
    </l-map>
    <!-- {{ datamarkers }} -->
  </div>
</template>

<script>
const tileProviders = [
  {
    name: "Esri Imageri",
    visible: false,
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri ",
  },
  {
    name: "OpenStreetMap",
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
];

export default {
  name: "Leaflet",
  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LGeoJson,
    LMarker,
  },
  // props: ["datamarkers"],

  data() {
    return {
      loading: true,
      show: true,
      enableTooltip: true,
      zoom: 5,
      center: [-0.9702233008715109, 115.66244636597672],
      geojson: null,
      fillColor: "#0CF9E0",
      tileProviders: tileProviders,
    };
  },
  methods: {
    async getSebaran() {
      this.loading = true;
      const response = await fetch("/geojson/tb-2022x.geojson");
      const data = await response.json();
      this.geojson = data;
      this.loading = false;

      // const obj = JSON.parse(await response.text());
      // this.geojson = obj;
    },
  },

  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },

    styleFunction() {
      const fillColor = this.fillColor;
      return () => {
        return {
          weight: 2,
          color: "#000000",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 0.8,
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.options.fillColor = feature.properties.COLOR;
        layer.bindTooltip(
          `<div>Provinsi:` +
            feature.properties.WADMPR +
            `</div>` +
            `<div>Kasus: ` +
            feature.properties.KASUS +
            `</div>`,
          {
            permanent: false,
            sticky: true,
          }
        );
      };
    },
  },

  // async created() {
  //   const response = await fetch("/public/geojson/tb-2022x.geojson");
  //   this.geojson = await response.json();
  //   console.log(this.geojson);
  // },
  mounted() {
    // const queryParameters = this.$route.query;
    // this.kode = queryParameters.kode;
    // this.getMaps();
    this.getSebaran();
  },
};
</script>
