<template>
  <main>
    <div
      class="back"
      :style="{
        background: `conic-gradient(#ededed ${backRatio}deg, #7d2ae8 0deg)`,
        transition: 'all 0.5 ',
      }"
    >
      <div class="counterNum">
        <h1>{{ counter }}</h1>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["counter"],
  setup(props) {
    const backRatio = computed(() => {
      return Math.ceil(12 * (30 - props.counter));
    });

    return {
      backRatio,
    };
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.back {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
}
.counterNum {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: var(--f-l);
    color: #7d2ae8;
  }
}

@media screen and (max-width: 300px) {
  .back {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
  }
  .counterNum {
    width: 45px;
    height: 45px;

    h1 {
      font-size: var(--f-l);
      color: #7d2ae8;
    }
  }
}
</style>
