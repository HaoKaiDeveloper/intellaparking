<template>
  <section class="popup">
    <div class="backdrop" @click="closePopup"></div>
    <div class="list">
      <button @click="closePopup">
        <icon icon="fa-solid fa-circle-xmark" />
      </button>

      <table>
        <tr class="title">
          <th>捐贈碼</th>
          <th>受捐贈機關或團體名稱</th>
        </tr>
        <tr v-for="donate in list" :key="donate.code" class="item">
          <td>{{ donate.code }}</td>
          <td>{{ donate.fullname }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import { donate } from "../../invoiceDonate";
import { computed } from "vue";
export default {
  emits: ["close-popup"],
  setup(props, contenxt) {
    const list = computed(() => {
      return donate.sort((a, b) => {
        return a.code - b.code;
      });
    });

    function closePopup() {
      contenxt.emit("close-popup", false);
    }
    return {
      list,
      closePopup,
    };
  },
};
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.list {
  width: 90%;
  height: 80vh;
  background-color: #fff;
  border-collapse: collapse;
  border-radius: 10px;
  letter-spacing: 1px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow-y: auto;
}

button {
  font-size: 2.5rem;
  background: none;
  border: none;
  position: absolute;
  right: 0em;
  top: 0em;
}

table {
  border-collapse: collapse;
  width: 100%;
}
th {
  font-size: var(--f-mi);
  padding: 1rem;
}
td {
  font-size: var(--f-mi);
  padding: 1rem;
}
tr:first-child {
  background-color: var(--grey-2);
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
