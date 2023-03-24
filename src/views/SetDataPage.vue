<template>
  <section>
    <main>
      <div class="logo">
        <img :src="logo" alt="logo" />
        <p>智能繳費平台</p>
      </div>

      <div class="parkingInfo">
        <label>選擇停車場域</label>
        <select v-model="parkingInfo.parkingToken">
          <option
            v-for="(parking, i) in parkingList"
            :key="parking.parkingToken"
            :selected="i === 0"
            :value="parking.parkingToken"
          >
            {{ parking.name }}
          </option>
        </select>
      </div>

      <div class="licenseInfo">
        <input
          type="text"
          placeholder="請輸入車牌數字號碼"
          v-model="parkingInfo.licensePlate"
        />
        <label for="partTime">
          <input
            type="radio"
            name="ParkimgTime"
            value="partTime"
            id="partTime"
            checked
          />
          臨停
        </label>
        <label for="month">
          <input type="radio" value="month" name="ParkimgTime" id="month" />
          月租
        </label>
      </div>

      <form class="invoiceInfo">
        <p>發票選項</p>
        <div class="btns">
          <button
            :class="activeInvoice === 'memberCode' ? 'active' : ''"
            @click="setActiveInvoice('memberCode')"
            type="button"
          >
            會員載具
          </button>
          <button
            :class="activeInvoice === 'phoneCode' ? 'active' : ''"
            @click="setActiveInvoice('phoneCode')"
            type="button"
          >
            手機載具
          </button>
          <button
            :class="activeInvoice === 'donationCode' ? 'active' : ''"
            @click="setActiveInvoice('donationCode')"
            type="button"
          >
            捐贈發票
          </button>
        </div>

        <div class="memberCode" v-if="activeInvoice === 'memberCode'">
          <label for="memberCode"
            >*會員載具
            <input
              type="text"
              id="memberCode"
              placeholder="會員編號/手機號碼"
              v-model="clientInfo.buyerPhone"
              @focus="zoomInInput"
              @blur="zoomOutInput"
            />
          </label>
          <label for="email"
            >*電子信箱
            <input
              type="text"
              id="email"
              v-model="clientInfo.buyerEmail"
              @focus="zoomInInput"
              @blur="zoomOutInput"
            />
          </label>
          <label for="taxId"
            >輸入統編
            <input
              type="number"
              id="taxId"
              v-model="clientInfo.buyerUBN"
              @focus="zoomInInput"
              @blur="zoomOutInput"
            />
          </label>
        </div>

        <div class="phoneCode" v-else-if="activeInvoice === 'phoneCode'">
          <label for="phone">
            *手機載具
            <input
              type="text"
              id="phone"
              v-model="clientInfo.carrierNum"
              @focus="zoomInInput"
              @blur="zoomOutInput"
            />
          </label>
        </div>

        <div class="donationCode" v-else-if="activeInvoice === 'donationCode'">
          <label for="donate">
            *捐贈發票
            <button @click="toggleDonateList(true)" type="button">
              (機構及團體名單)
            </button>
            <input
              type="number"
              id="donate"
              v-model="clientInfo.loveCode"
              @focus="zoomInInput"
              @blur="zoomOutInput"
            />
          </label>
        </div>
      </form>
      <aside>
        <p v-if="errorMsg.length > 0" class="errorMsg">{{ errorMsg }}</p>
        <button class="checkBtn" @click="getAllCarsInfo">確定</button>
      </aside>
    </main>
    <DonateList v-if="openDonateList" @close-popup="toggleDonateList" />
  </section>
</template>

<script>
import logo from "../assets/logo.png";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import DonateList from "../components/SetDataPage/DonateList.vue";
export default {
  components: { DonateList },
  setup() {
    const store = useStore();
    const { params } = useRoute();
    const route = useRoute();

    const router = useRouter();
    const activeInvoice = ref("");
    const openDonateList = ref(false);
    const errorMsg = ref("");
    const parkingList = ref([]);
    const clientInfo = reactive({
      buyerPhone: "", //10位數純數字(手機載具)
      buyerEmail: "", //@
      buyerUBN: "", //8位數純數字(統編)
      carrierNum: "", // 有"/"數字加英文(手機載具)
      loveCode: "", //1~7位數純數字
    });

    const parkingInfo = reactive({
      licensePlate: "", //車牌號(純數字部分)
      parkingToken: "", //停車場域id
    });

    init();
    async function init() {
      const paramsObj = Object.keys(params).length;
      activeInvoice.value = "memberCode";
      localStorage.clear();
      if (paramsObj === 1) {
        parkingInfo.parkingToken = params.parkingToken;
      }
      const resList = await store.dispatch("getAllParkingList", {
        parkingToken: parkingInfo.parkingToken,
      });
      parkingList.value = resList;
      parkingInfo.parkingToken = resList[0].parkingToken;
    }

    function clientInfoValida() {
      if (activeInvoice.value === "memberCode") {
        clientInfo.carrierNum = "";
        clientInfo.loveCode = "";
        if (
          clientInfo.buyerPhone === "" ||
          clientInfo.buyerEmail === "" ||
          !clientInfo.buyerEmail.includes("@")
        ) {
          setErrorMsg("請輸入完整資訊");
          return false;
        }
        if (
          clientInfo.buyerPhone.length !== 10 ||
          isNaN(parseInt(clientInfo.buyerPhone))
        ) {
          setErrorMsg("會員載具格是錯誤");
          return false;
        }
        if (clientInfo.buyerUBN) {
          if (
            clientInfo.buyerUBN.toString().length !== 8 ||
            isNaN(clientInfo.buyerUBN)
          ) {
            setErrorMsg("統一編號為8位數字");
            return false;
          }
        }
      } else if (activeInvoice.value === "phoneCode") {
        clientInfo.buyerEmail = "";
        clientInfo.buyerPhone = "";
        clientInfo.buyerUBN = "";
        clientInfo.loveCode = "";
        if (
          clientInfo.carrierNum.length === 0 ||
          clientInfo.carrierNum.length !== 8
        ) {
          setErrorMsg("手機載具格式錯誤");
          return false;
        }
      } else if (activeInvoice.value === "donationCode") {
        clientInfo.buyerEmail = "";
        clientInfo.buyerPhone = "";
        clientInfo.buyerUBN = "";
        clientInfo.carrierNum = "";
        if (
          clientInfo.loveCode.toString().length === 0 ||
          isNaN(clientInfo.loveCode)
        ) {
          setErrorMsg("捐贈碼格式錯誤");
          return false;
        }
      }
      return true;
    }

    function parkingInfoValida() {
      if (
        parkingInfo.licensePlate.length === 0 ||
        parkingInfo.parkingToken.length === 0
      ) {
        setErrorMsg("請輸入正確車牌號碼");
        return false;
      }
      if (isNaN(parkingInfo.licensePlate)) {
        setErrorMsg("輸入車牌數字部分即可");
        return false;
      }
      return true;
    }

    function setErrorMsg(msg) {
      errorMsg.value = msg;
      let err = setTimeout(() => {
        errorMsg.value = "";
        if (errorMsg.value === "") {
          clearInterval(err);
        }
      }, 2500);
    }

    function setActiveInvoice(val) {
      activeInvoice.value = val;
    }

    function toggleDonateList(val) {
      openDonateList.value = val;
    }

    function zoomInInput() {
      const allMeta = document.querySelectorAll("meta");
      const viewportMeta = allMeta[2];
      viewportMeta.content = "width=device-width,initial-scale=1.2";
    }

    function zoomOutInput() {
      const allMeta = document.querySelectorAll("meta");
      const viewportMeta = allMeta[2];
      viewportMeta.content = "width=device-width,initial-scale=1.0";
    }

    async function getAllCarsInfo() {
      const clientInfoValidation = clientInfoValida();
      const parkingInfoValidation = parkingInfoValida();

      if (!clientInfoValidation || !parkingInfoValidation) {
        // setErrorMsg("請輸入完整資訊");
        return;
      }
      const res = await store.dispatch("getAllCarsInfo", parkingInfo);
      if (res.length > 0) {
        //把資料存進local
        localStorage.setItem("parkingInfo", JSON.stringify(parkingInfo));
        localStorage.setItem("clientInfo", JSON.stringify(clientInfo));
        localStorage.setItem("allCarsInfo", JSON.stringify(res));
        //轉跳到下一頁
        router.replace("/steps/carSelect");
      } else {
        setErrorMsg("查無車輛");
      }
    }

    return {
      logo,
      activeInvoice,
      setActiveInvoice,
      toggleDonateList,
      openDonateList,
      getAllCarsInfo,
      clientInfo,
      parkingInfo,
      parkingList,
      errorMsg,
      zoomInInput,
      zoomOutInput,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  background-color: var(--yellow-2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5em;
  padding: 2em 1.5em;
}

.logo {
  display: flex;
  align-items: flex-end;
  gap: 1em;
  margin-bottom: 1.5em;
  img {
    width: 10em;
  }
  p {
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
}

aside {
  position: relative;
  padding-top: 2em;
  width: 100%;
}
.errorMsg {
  position: absolute;
  top: -0.5em;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--f-mi);
  color: blue;
}

.checkBtn {
  display: block;
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--grey-4);
  padding: 0.8em 1.8em;
  border-radius: 10px;
  margin: 0 auto;

  background-color: var(--grey-2);
  &:hover,
  &:active {
    background-color: var(--yellow-2);
    cursor: pointer;
  }
}

.parkingInfo {
  font-size: var(--f-l);
  font-weight: 500;
  color: var(--grey-4);
  select {
    font-size: var(--f-l);
    margin: 0 0.7em;

    @media screen and (max-width: 350px) {
      margin: 1rem 0;
    }
  }
  option {
    font-size: var(--f-mi);
  }
}

.licenseInfo {
  font-size: var(--f-l);

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 1rem;
    font-size: 3rem;
    margin-bottom: 0.5em;
    border-radius: 7px;
    /* transition: all 0.3s;
    &:focus {
      transform: scale(1.5);
    } */
  }
  input[type="radio"] {
    width: 20px;
    height: 20px;
  }
  label {
    margin: 0 0.7em;
    font-weight: 500;
    letter-spacing: 1px;
  }
}

.invoiceInfo {
  width: 100%;
  border: 2px solid var(--grey-1);
  padding: 2em 1em;
  border-radius: 7px;
  p {
    font-size: var(--f-l);
    font-weight: 500;
  }
  .btns {
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    button {
      font-size: var(--f-mi);
      letter-spacing: 1px;
      padding: 0.3em 0.5em;
      border-radius: 7px;
      border: 1px solid var(--grey-3);
      color: var(--grey-4);

      &.active {
        background-color: var(--yellow-2);
        font-weight: 600;
        border: 2px solid var(--grey-3);
      }
    }
  }

  .memberCode,
  .phoneCode,
  .donationCode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input,
    label {
      display: block;
      width: 100%;
      font-size: var(--f-mi);
      border-radius: 7px;
    }

    input {
      padding: 0.5em;
      margin: 0.7em 0;
      /* transition: all 0.3s; */
      letter-spacing: 1px;
      /* &:focus {
        transform: scaleY(1.25);
        transform-origin: bottom;
        font-size: var(--f-mi);
        line-height: 1.5;
      } */
    }
  }

  .donationCode {
    button {
      color: blue;
      background: none;
      border: none;
      border-bottom: 0.7px solid blue;
      padding: 0.2em 0;
      font-size: var(--f-mi);
    }
  }
}
</style>
