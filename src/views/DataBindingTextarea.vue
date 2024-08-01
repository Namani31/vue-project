<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "여긴 textarea 입니다!",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
