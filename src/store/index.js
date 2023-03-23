import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {
    async getAllParkingList(context, payload) {
      //所有場域list
      try {
        let response;
        if (payload.parkingToken) {
          response = await axios.post(
            "https://a.intella.co/intella-parking/api/parkingInfo/getOne",
            payload
          );
        } else {
          response = await axios.get(
            "https://a.intella.co/intella-parking/api/parkingInfo/listAll"
          );
        }

        const { data } = response;
        if (data.status === "0000") {
          const { result } = data;
          if (Array.isArray(result)) {
            return result;
          } else {
            return [result];
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getAllCarsInfo(context, payload) {
      //車牌(會先給完整車牌這裡要轉純數字)及場域id
      try {
        const response = await axios.post(
          "https://a.intella.co/intella-parking/api/car/find",
          payload
        );
        const { data } = response;
        if (response.status === 200 && data.status === "0000") {
          return data.result;
        } else if (data.status === "9999") {
          console.log(data);
          return [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getCheckoutQrCode(context, payload) {
      try {
        //request
        //   {
        //     "buyerEmail": "",
        //     "buyerPhone": "",
        //     "carrierNum": "",//載具號碼
        //     "loveCode": "",
        //     "buyerUBN": "",//統一編號
        //     "licensePlate":""
        //   "parkingToken":"",
        //   "amount":"",//金額
        //   "licensePlate":"" //完整車牌
        // }

        const response = await axios.post(
          "https://a.intella.co/intella-parking/api/order/create",
          payload
        );
        const { data } = response;
        if (data.status === "0000") {
          return data.result;
        } else {
          return { paymentUrl: "", orderId: "" };
        }
        //response 結帳qrcode
      } catch (err) {
        console.log(err);
      }
    },
    async checkPaymentSuccess(context, payload) {
      try {
        const response = await axios.post(
          "https://a.intella.co/intella-parking/api/order/getOrder",
          {
            orderId: payload,
          }
        );

        const { data } = response;
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
