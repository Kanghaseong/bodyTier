<template>
  <div class="home">
    <title-bar msg="BodyTier" />
    <div>
      <input class="input" type="text" placeholder="키" v-model.number="cmValue" @input="bmi" /> cm
    </div>
    <div>
      <input class="input" type="text" placeholder="몸무게" v-model.number="kgValue" @input="bmi" /> kg
    </div>
    <div>
      <input class="input" type="text" placeholder="나이" v-model.number="ageValue" /> 살
    </div>

    <div>
      나의 BMI 지수: {{ bmiValue }}
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from '../components/TitleBar.vue';

export default {
  name: "HomeView",
  data() {
    return {
      cmValue: "",
      kgValue: "",
      ageValue: "",
      bmiValue: "0.0"
    }

  },
  components: {
    TitleBar
  },
  methods: {
    bmi() {
      console.log(typeof this.cmValue)
      if (this.cmValue === "" || this.kgValue === "") {
        this.bmiValue = "0.0";
      } else {
        this.bmiValue = (this.kgValue / (this.cmValue * this.cmValue / 10000)).toFixed(1);
      }
    }
  }
};
</script>
<style>
.input {
  margin: 2rem auto;

  border: 1;
  width: 25rem;
  height: 4rem;
  font-size: large;
}
</style>