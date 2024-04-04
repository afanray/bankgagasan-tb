import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import RuangGagasan from "../views/RuangGagasan.vue";
import Aksi from "../views/Aksi.vue";
import Sebaran from "../views/Sebaran.vue";
import Kontak from "../views/Kontak.vue";

import Laporan from "../views/ruanggagasan/Laporan.vue";
import Layanan from "../views/ruanggagasan/Layanan.vue";
import Pencegahan from "../views/ruanggagasan/Pencegahan.vue";
import Pengobatan from "../views/ruanggagasan/Pengobatan.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/aksi",
    name: "aksi",
    component: Aksi,
  },
  {
    path: "/kontak",
    name: "kontak",
    component: Kontak,
  },

  {
    path: "/sebaran",
    name: "sebaran",
    component: Sebaran,
  },
  {
    path: "/ruang-gagasan",
    name: "ruanggagasan",
    component: RuangGagasan,
  },

  {
    path: "/ruang-gagasan/laporan",
    name: "ruanggagasan.laporan",
    component: Laporan,
  },

  {
    path: "/ruang-gagasan/layanan",
    name: "ruanggagasan.layanan",
    component: Layanan,
  },
  {
    path: "/ruang-gagasan/pencegahan",
    name: "ruanggagasan.pencegahan",
    component: Pencegahan,
  },
  {
    path: "/ruang-gagasan/pengobatan",
    name: "ruanggagasan.pengobatan",
    component: Pengobatan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
