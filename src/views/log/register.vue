<!--注册-->
<template>
  <div class="register">
    <div>
      <img src="@/assets/pic/logo2.png" class="logoPic"/>
    </div>
    <div class="registerForm">
      <van-form @submit="onSubmit">
          <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="请输入用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
              v-model="password2"
              type="password"
              name="确认密码"
              label="确认密码"
              placeholder="请再次输入密码"
              :rules="[{ required: true, message: '请再次填写密码' }]"
          />
          <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">我要入驻赚钱</van-radio>
              <van-radio name="2">我要雇佣作者</van-radio>
          </van-radio-group>
          <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">注册</van-button>
          </div>
      </van-form>
      <div class="loginLine">已有账号？马上登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
        username:'',
        password:'',
        password2:'',
        radio:'1'
    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>
<style lang="scss" scoped>
.register{
    width: 100%;
    height: 100%;
    background: url(../../assets/pic/bg2.png);
    background-repeat:no-repeat;
    -moz-background-size:100% 100%;
    background-size:100% 100%;
    opacity: 0.85;
    z-index:-1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logoPic{
  // width: rem;
  height: 4.1rem;
  margin-left: 0.5rem;
}
.registerForm{
    width: calc(96%-0.4rem);
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1rem;
    // height: 6.25rem;
    border-radius: .25rem;
    background-color: rgba(255, 255, 255, 0.9);
    padding:0.2rem 0.4rem 0.5rem 0.4rem;
}
.van-radio-group{
    font-size: 0.5rem;
    height: 1.1rem;
    margin-left: 1.2rem;
}
.van-cell{
  line-height: 1.2rem;
  font-size: 0.5rem;
  background-color: transparent;
}
/deep/.van-field__error-message{
  line-height: 0.8rem !important;
  font-size: 0.4rem !important;
}
.van-button--block{
  height: 1.1rem;
}
.van-button--normal{
  font-size: 0.43rem;
}
.loginLine{
  color: #1989fa;
  font-size: 0.43rem;
  text-align: center;
}
</style>