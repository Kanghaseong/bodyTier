<template>
  <div class="coin">
    <img :src="coinImgSrc" :alt="coinAltName">
    <div class="textBox">
      <div class="coinName">{{ coinName }}</div>
    </div>
    <div class="textBox">
      <div class="coinPrice">{{ coinPrice }}</div>
    </div>



  </div>
</template>

<script>
import testSrc from '../imgSource/bitcoinTestImg.png';

export default {
  props: {
    coinName: String,
    coinPrice: Number
  },


  data() {
    return {
      coinName: "Bitcoin",
      coinPrice: 2000,
      coinImgSrc: testSrc
    }
  }
};
</script>


<style scoped>
.coin {
  display: flex;
  align-items: center;
  margin-left: 2rem;
}

.coin * {
  font-size: 1.5rem;
  margin: 0.5rem;
}

.coin img {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}

.textBox {
  background-color: rgb(61, 61, 61);
  border-radius: 0.5rem;
}

.textBox * {
  margin: 0.2rem;
}
</style>