<template>
  <section>
    <main class="success">
      <div>
        <span class="icon">
          <icon icon="fa-solid fa-check" />
        </span>
        <p>無須繳費</p>
      </div>
      <p class="msg">請於指定時間內離場 <span>謝謝使用</span></p>

      <router-link :to="`/p/${parkingToken.value}`" @click="goHomePage">
        <button>確認</button>
      </router-link>
    </main>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const parkingToken = ref("");
    let parkingInfo = localStorage.getItem("parkingInfo");

    if (parkingInfo) {
      parkingInfo = JSON.parse(parkingInfo);
      parkingToken.value = parkingInfo.parkingToken;
    }

    function goHomePage() {
      localStorage.removeItem("allCarsInfo");
      localStorage.removeItem("paymentUrl");
      localStorage.removeItem("activeInvoice  ");
      router.replace(`/p/${parkingToken.value}`);
    }

    return {
      goHomePage,
      parkingToken,
    };
  },
};
</script>

<style scoped lang="scss">
section {
  padding-top: 3em;
}
main {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    padding: 3.3em 2em;
    border-radius: 10px;
    margin-bottom: 2em;
  }
  p:nth-child(2) {
    font-size: 3rem;
  }
  p:nth-child(3) {
    font-size: 2.5rem;
  }

  .msg {
    span {
      display: block;
    }
  }
  a {
    margin-top: 1.5em;
    display: block;
    text-align: center;
    button {
      font-size: 2.3rem;
      font-weight: 600;
      color: var(--grey-4);
      padding: 0.8em 1.8em;
      border-radius: 10px;

      background-color: var(--yellow-1);
      &:hover,
      &:active {
        background-color: var(--yellow-2);
        cursor: pointer;
      }
    }
  }
}
.icon {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--yellow-2);
  font-size: 4rem;
  margin-bottom: 0.7em;
  color: var(--grey-4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.fail .icon {
  background-color: red;
}
</style>
