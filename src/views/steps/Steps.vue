<template>
  <section>
    <Navbar />
    <router-view> </router-view>
  </section>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";

export default {
  components: { Navbar },
  setup() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
