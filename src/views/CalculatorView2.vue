<template>
  <div class="">
    <h3>CalculatorView3</h3>
    <input type="text" v-model="state.num1" @keyup="plusNumbers"> <span> + </span>
    <input type="text" v-model="state.num2" @keyup="plusNumbers"> <span> = </span>
    <span>{{ state.result }}</span>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'CalculatorView2',
  setup() {
    // 반응형 상태 객체
    let state = reactive({
        num1 : 0,
        num2: 0,
        result: 0,
    });
    function plusNumbers() {
        state.result = Number(state.num1) + Number(state.num2);
    }
    return{state, plusNumbers}
  }
};
   
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>