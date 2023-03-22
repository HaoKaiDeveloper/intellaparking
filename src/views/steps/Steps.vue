<template>
  <section>
    <Navbar />
    <router-view> </router-view>
  </section>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: { Navbar },
  setup() {},
};
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
