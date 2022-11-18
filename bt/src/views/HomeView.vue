<template>
  <div class="home">
    <title-bar msg="BodyTier" />

    <div class="inputCon">
      <input class="input" type="text" placeholder="키" v-model.number="cm" @input="makeBmi" />
      <span>cm</span>
    </div>
    <div class="inputCon">
      <input class="input" type="text" placeholder="몸무게" v-model.number="kg" @input="makeBmi" />
      <span>kg</span>
    </div>
    <div class="inputCon">
      <input class="input" type="text" placeholder="나이" v-model.number="age" />
      <span>살</span>
    </div>
    <div class="bmiCon">
      <div class="bmi">
        나의 BMI 지수:
      </div>
      <div class="bmiNum">
        {{ bmi }}
      </div>
    </div>

  </div>
</template>

<script>

import TitleBar from '../components/TitleBar.vue';

export default {
  name: "HomeView",
  data() {
    return {
      cm: "",
      kg: "",
      age: "",
      bmi: "0.0"
    }

  },
  components: {
    TitleBar
  },
  methods: {
    makeBmi() {
      console.log(typeof this.cm)
      if (this.cm === "" || this.kg === "") {
        this.bmi = "0.0";
      } else {
        this.bmi = (this.kg / (this.cm * this.cm / 10000)).toFixed(1);
      }
    },
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

.home {
  font-family: 'Noto Sans KR', sans-serif;
}

.input {
  margin: 2rem auto;
  width: 25rem;
  height: 3.5rem;
  font-size: 1.5rem;
}

.bmi {
  font-size: 1.5rem;
}

.bmiNum {
  font-size: 8rem;
  margin-top: -1rem;
}

.inputCon {
  font-size: 1.5rem;
}

span {
  margin-left: 1rem;
}
</style>