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
    <l-map
      :zoom="zoom"
      :center="center"
      :bounds="bounds"
      :max-bounds="maxBounds"
      style="height: 500px; width: 100%"
    >
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
        :name="'Kasus TB 2022'"
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
  props: ["datamarkers"],

  data() {
    return {
      show: true,
      enableTooltip: true,
      zoom: 5,
      center: [-0.9702233008715109, 115.66244636597672],
      bounds: null,
      maxBounds: null,
      geojson: null,
      fillColor: "#0CF9E0",
      tileProviders: tileProviders,
    };
  },
  methods: {
    async getBatasDesa() {
      const response = await fetch("/public/geojson/tb-2022.geojson");
      const data = await response.json();
      this.geojson = data;
      console.log(data);
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

  async created() {
    const response = await fetch("/public/geojson/tb-2022.geojson");
    this.geojson = await response.json();
    console.log(this.geojson);
  },
};
</script>
