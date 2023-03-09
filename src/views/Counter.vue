<template>
  <div class="counter-container">
    <h1>Counter: {{ counter.state.count }}</h1>
    <div class="button-container">
      <button class="buttons" @click="counter.increment">Increment</button>
      <button class="buttons" @click="counter.decrement" :disabled="counter.state.count === 0">Decrement</button>
      <button class="buttons" @click="counter.reset">Reset</button>
      <div class="setvalue">
        <input type="tel" v-model="value" />
        <button @click="counter.setValue(value)">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "CounterPage",
  setup() {
    const counter = useCounter();
    const value = counter.state.count;

    return {
      counter,
      value,
    };
  },
};
</script>

<style scoped>
.counter-container {
  text-align: center;
  margin-top: 4%;
}
h1 {
  font-size: 50px;
}
.button-container {
  margin-top: 15%;
}
.buttons:disabled {
  background-color: #000000;
  color: #fff;
}
.buttons {
  width: 250px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  /* border: none; */
  background-color: #61cfda;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 20px;
}
.setvalue {
  display: grid;
  margin-left: 17.1%;
  margin-top: 0.7%;
}
input {
  width: 815px;
  height: 45px;
  border-radius: 5px;
  padding-left: 10px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
}
.setvalue button {
  width: 250px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #61cfda;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-left: 28%;
  margin-top: 1.5%;
}
</style>
