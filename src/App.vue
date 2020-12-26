<template>
  <body>
    <div id="app">
      <app-home></app-home>
    </div>
  </body>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    appHome: Home,
  },
};
</script>

<style>
body{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  background-color: #71D2F5;
  width: 95%;
  margin: auto;
}
</style>
