<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap");
:root {
  --yellow-1: rgb(255, 236, 171);
  --yellow-2: rgb(254, 215, 63);

  --grey-1: #fff;
  --grey-2: #e0e0e0;
  --grey-3: #757575;
  --grey-4: #212121;

  --shadow-1: 5px 5px 10px rgba(0, 0, 0, 0.6);

  --f-l: 2.3rem;
  --f-mi: 1.8rem;
  --f-s: 1.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Noto Sans TC", sans-serif;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}
button {
  cursor: pointer;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
