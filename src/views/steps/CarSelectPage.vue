<template>
  <section>
    <h1>請點選您的車牌照片</h1>
    <main>
      <img
        v-for="car in cars"
        :src="carImg"
        :alt="car.licensePlate"
        :key="car.licensePlate"
        @click="goCheckoutPage(car)"
      />
    </main>
  </section>
</template>

<script>
import carImg from "../../assets/C51589.jpg";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    // 先從local取得所有車

    const cars = JSON.parse(localStorage.getItem("allCarsInfo"));

    async function goCheckoutPage(carInfo) {
      const clientInfo = JSON.parse(localStorage.getItem("clientInfo"));
      const car = cars.filter(
        (car) => car.licensePlate === carInfo.licensePlate
      );
      const parkingToken = JSON.parse(
        localStorage.getItem("parkingInfo")
      ).parkingToken;

      if (car.length < 1) {
        return;
      }

      const res = await store.dispatch("getCheckoutQrCode", {
        ...clientInfo,
        ...car[0],
        parkingToken,
      });

      if (res.paymentUrl.length > 0) {
        localStorage.setItem("paymentUrl", JSON.stringify(res));
        router.push(`/steps/checkout/${car[0].licensePlate}`);
      } else {
        router.push("/");
      }
    }

    return {
      cars,
      carImg,
      goCheckoutPage,
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: var(--f-l);
  letter-spacing: 1px;
  margin: 1em 0;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;

  img {
    margin: 0 auto;
    max-width: 500px;
    width: 80%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: var(--shadow-1);
    cursor: pointer;
  }
}
</style>
