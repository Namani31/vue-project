<template>
  <div class="">
    <br>
    <br>
    <sample-01-pop title="경고"/>
    <br>
    <br>
    <sample-02-pop/>
  </div>
</template>

<script>
import Sample01Pop from './Sample01Pop.vue';
import Sample02Pop from './Sample02Pop.vue';
export default {
  name: 'TestView',
  components:{
    Sample01Pop,Sample02Pop
  }
};
</script>
    Sample01Pop

<style scoped>
/* 스타일을 추가하세요 */
</style>