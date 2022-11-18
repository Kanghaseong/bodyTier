<template>
  <div class="bitWatcher">
    <TitleBar msg="BitWatcher" />
    <ListBar />
    <Coin></Coin>
  </div>
</template>
<script>
// @ is an alias to /src
import TitleBar from '../components/TitleBar.vue';
import Coin from '../components/Coin.vue';
import ListBar from '../components/ListBar.vue';

export default {
  name: "BitView",
  data() {
    return {

    }

  },
  components: {
    TitleBar,
    Coin,
    ListBar
  },
  methods: {

  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
</style>