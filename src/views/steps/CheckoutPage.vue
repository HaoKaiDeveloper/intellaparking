<template>
  <section>
    <main>
      <h1>確認您的繳費資訊</h1>
      <div class="payment_info">
        <div class="text">
          <p class="total">待繳金額 ${{ carInfo.amount }}</p>
          <p>車牌號碼 : {{ carInfo.licensePlate }}</p>
          <p>
            入場時間 :
            {{ carInfo.entryTime }}
          </p>
          <p>停車時間 : {{ carInfo.parkingTime }}</p>
          <p>應繳金額 : {{ carInfo.amount }}</p>
        </div>
      </div>
    </main>

    <h1>請點擊QR Code 付款</h1>
    <div class="qrcode_box">
      <a :href="paymentUrl">
        <QrcodeVue :value="paymentUrl" :size="200" level="H" />
        <img :src="finger" alt="icon" />
      </a>
    </div>

    <router-link to="/p/steps/carSelect">
      <button>上一頁</button>
    </router-link>
  </section>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import finger from "../../assets/finger.png";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: { QrcodeVue },
  setup() {
    const allCars = JSON.parse(localStorage.getItem("allCarsInfo"));
    const paymentUrl = JSON.parse(localStorage.getItem("paymentUrl")).result
      .paymentUrl;
    const parkingToken = JSON.parse(
      localStorage.getItem("parkingInfo")
    ).parkingToken;
    const route = useRoute();
    const router = useRouter();
    const { licensePlate } = route.params;
    const carInfo = ref({});

    const car = allCars.filter((car) => car.licensePlate === licensePlate);
    if (car.length < 1) {
      router.push(`/p/${parkingToken}`);
      return;
    }
    carInfo.value = car[0];

    return { carInfo, paymentUrl, finger };
  },
};
</script>

<style scoped lang="scss">
section,
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
}

h1 {
  font-size: var(--f-l);
  letter-spacing: 1px;
  margin-top: 1em;
}

.text {
  font-size: var(--f-mi);
  letter-spacing: 1.5px;
  color: var(--grey-3);
  font-weight: 500;
  padding: 0 1rem;
  p:nth-child(1) {
    font-size: 3rem;
    margin-bottom: 0.5em;
    color: var(--grey-4);
  }
  .total {
    text-align: center;
  }
}
.qrcode_box {
  position: relative;
  img {
    width: 70px;
    object-fit: cover;
    position: absolute;
    right: -4.5em;
    bottom: -1.2em;
  }
}
a {
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
</style>
