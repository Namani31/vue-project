<template>
  <div>
    <select name="instrument" v-model="instrument">
        <option value="piano">피아노</option>
        <option value="guitar">기타</option>
        <option value="drum">드럼</option>
        <option value="ocarina">오카리나</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instrument: "ocarina"
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>