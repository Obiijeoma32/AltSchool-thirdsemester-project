import { reactive } from "vue";

export default function useCounter() {
  const state = reactive({
    count: 0,
  });

  function increment() {
    state.count++;
  }

  function decrement() {
    state.count--;
  }

  function reset() {
    state.count = 0;
  }

  function setValue(value) {
    state.count = value;
  }

  return {
    state,
    increment,
    decrement,
    reset,
    setValue,
  };
}
