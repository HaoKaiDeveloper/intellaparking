<template>
  <div class="navbar">
    <button class="homeBtn" @click="toHomePage">
      <icon icon="fa-solid fa-house" />
    </button>
    <nav>
      <ul>
        <li>{{ navName }}</li>
      </ul>
    </nav>
    <div class="counter">
      <CounterComponent :counter="counter" />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import CounterComponent from "./Counter.vue";
export default {
  components: { CounterComponent },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const navName = computed(() => {
      switch (route.name) {
        case "carSelect":
          startCountDown();
          return "一. 選擇資料";
        case "checkout":
          startCountDown();
          return "二. 選擇付款方式";
        case "result":
          return "三. 繳費狀態";
      }
    });

    const counter = ref(30);

    let countdownInterval;
    function startCountDown() {
      clearCountdownInterval();
      countdownInterval = setInterval(() => {
        counter.value--;
        if (counter.value <= 1) {
          counter.value = 0;
          clearCountdownInterval();
          router.replace("/");
        }
      }, 1000);
    }

    function clearCountdownInterval() {
      clearInterval(countdownInterval);
      counter.value = 30;
    }

    function toHomePage() {
      router.replace({ path: "/" });
    }

    return {
      navName,
      counter,
      toHomePage,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  background-color: var(--yellow-2);
  padding: 1.5em 3em;
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    margin-right: -1em;
  }
  ul {
    list-style: none;
    font-size: 2rem;
    letter-spacing: 1.5px;
    font-weight: 600;
  }
  button {
    border: none;
    background: none;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 300px) {
    padding: 1.5em 1em;
    ul {
      font-size: 1.8rem;
      letter-spacing: 1px;
    }
    button {
      border: none;
      background: none;
      font-size: 2rem;
    }
  }
}
</style>
