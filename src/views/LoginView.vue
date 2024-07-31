<template>
  <div class="login">
    <div class="box">
      <h1>회원가입</h1>
      <form>
        <div class="form-group">
          <h3>사용자 이름</h3>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <h3>이메일</h3>
          <input type="eamil" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <h3>비밀번호</h3>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <h3>비밀번호 확인</h3>
          <input type="password" id="check-password" v-model="checkPassword" required>
        </div>
        <div class="form-group">
          <h3>성별</h3>
          <div class="radio-group">
            <label><input type="radio" value="male" v-model="gender" required> 남성 </label>
            <label><input type="radio" value="female" v-model="gender" required> 여성 </label>
          </div>
        </div>
        <div class="form-group">
          <h3>좋아하는 음식</h3>
          <select id="tasty-food" v-model="tastyFood" required>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div class="form-group checkbox-group">
          <label><input type="checkbox" v-model="privacy" required>정보공개 동의</label>
        </div>
        <div class="form-group button-container">
          <input type="submit" value="가입하기">
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      username: '홍길동',
      email: 'user1234@naver.com',
      password: '1234',
      checkPassword: '1234',
      gender: '',
      tastyFood: '한식',
      privacy: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
.login {
  width: 100%;
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f9;
}

.box {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  width: 400px;
  height: 100%;
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group h3 {
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.form-group input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.form-group input[type="submit"]:hover {
  background-color: #0056b3;
}

.radio-group {
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.radio-group label {
  display: flex;
  margin-top: 10px;
}

.checkbox-group {
  display: flex;
  margin: 10px;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 10px;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}
</style>
