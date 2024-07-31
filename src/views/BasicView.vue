/*
  v-model: 양방향 Bind
  v-bind: 단방향 Bind (data->요소)
  v-on: 이벤트
*/
<template>
  <div class="Basic">
    <h3>Hello, {{ title }}</h3>
    <h3>{{ title }}는 대한민국에 있습니다.</h3>
    <p>{{ message }}</p>
    <p v-html="message"></p>
  </div>
  <div>
    <input type="text" v-model="nickname" />
  </div>
  <div>
    <input type="number" v-model="age" />
  </div>
  <div>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">경기</option>
    </select>
  </div>
  <div>
    <label><input type="checkbox" v-model="cbox">{{ cbox }}</label>
    <br>
    <label><input type="checkbox" v-model="cbox2" true-value="동의" false-value="비동의">{{ cbox2 }}</label>
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label><input type="checkbox" v-model="goodfood" value="마라탕">마라탕</label>
    <label><input type="checkbox" v-model="goodfood" value="민트초코">민트초코</label>
    <label><input type="checkbox" v-model="goodfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 좋아하는 음식은 {{ goodfood }}입니다.</p>
  </div>
  <div>
    <p>싫어하는 음식은?</p>
    <label><input type="checkbox" v-model="badfood" value="마라탕">마라탕</label>
    <label><input type="checkbox" v-model="badfood" value="민트초코">민트초코</label>
    <label><input type="checkbox" v-model="badfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 싫어하는 음식은 {{ badfood }}입니다.</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label><input type="radio" v-model="gender" value="남">남</label>
    <label><input type="radio" v-model="gender" value="여">여</label>
    <p>당신은 {{ gender }}자입니다.</p>
  </div>

  <h3>------------속성 연결-----------</h3>
  <div>
    <img v-bind:src="imgSrc" alt="" v-bind:title="toolTip"/>
  </div>
  <div>
    <button v-bind:disabled="show1">눌러주세요</button>
    <button v-bind:disabled="show2">눌러주세요</button>
  </div>
  <div>
    <button v-bind:style="btn1">눌러주세요</button>
    <button v-bind:style="btn2">눌러주세요</button>
  </div>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  끝
</template>

<script>
export default {
  name: 'BasicView',
  data() {
    return {
      title: '나마니',
      message: '<b>나마니</b>는 <b><span style="color:red">열심히</span></b> 합니다.',
      nickname: '냠냠',
      age: 22 + 3,
      city: '01',
      cbox: false,
      cbox2: '비동의',
      goodfood: [],
      badfood: [],
      gender: '',
      imgSrc:"https://borgssam.github.io/MySite/img/album_01.jpg",
      toolTip:"툴팁 메시지",
      show1:true,
      show2:false,
      btn1: {
        backgroundColor: 'blue',
        color: 'yellow',
        fontSize: '32px',
      },
      btn2: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: '32px',
      }
    };
  },
};
</script>

<style scoped>
</style>
