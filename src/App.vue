<template>
  <div id="app" class="main">
    <faq />
    <Info @show-popup="showPopup($event)" />
    <EmailPopup v-if="isShowPopup" @hide-popup="hidePopup($event)" />
  </div>
</template>

<script>
import Faq from "./components/FAQ";
import Info from "./components/Info";
import EmailPopup from "./components/EmailPopup";

export default {
  name: "App",
  components: {
    Faq,
    Info,
    EmailPopup
  },
  data: () => ({
    isShowPopup: false
  }),
  computed: {},
  methods: {
    hidePopup(e) {
      this.isShowPopup = e;
    },
    showPopup(e) {
      this.isShowPopup = e;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.main {
  display: flex;
}
</style>
