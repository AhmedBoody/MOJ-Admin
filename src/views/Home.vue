<template>
  <div class="home">
    <h1>This is home page</h1>
    <h1>{{$t('message.hello')}}</h1>
    <button v-on:click="changeLang()">Change Language</button>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import { changeLanguage } from "../main.js";
import HelloWorld from "../components/HelloWorld.vue";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {};
  },
  components: {HelloWorld},
  mounted() {},
  methods: {
    changeLang: function() {
      changeLanguage();
    }
  }
};
</script>
