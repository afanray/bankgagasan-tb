<script setup>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import SignIn from "../../components/SingIn.vue";
import FormInput from "../../components/FormInput.vue";
</script>

<template>
  <Navbar />

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
      <h3 class="display-6 mb-4 wow fadeInDown" data-wow-delay="0.1s">
        Form Pelaporan
      </h3>
      <ol
        class="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Pages</a></li>
        <li class="breadcrumb-item active text-primary">Pelaporan</li>
      </ol>
    </div>
  </div>
  <div>
    <h2>TOken : {{ token }}</h2>
    <div v-if="!token">
      <SignIn></SignIn>
    </div>

    <div v-else>
      <FormInput></FormInput>
    </div>
  </div>
  <div></div>

  <!-- Header End -->

  <Footer></Footer>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const token = ref(true);

    return {
      token,
    };
  },

  mounted() {
    // console.log(this.token); // 0
  },
};
</script>
