<!--登录-->
<template>
  <div class="login">
    <div>
      <img src="@/assets/pic/logo2.png" class="logoPic"/>
    </div>
    <div class="loginForm">
      <div v-show="isLogin">
        <van-form @submit="onLoginSubmit">
            <van-field
                v-model="loginForm.username"
                name="用户名"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="loginForm.password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>
        <div class="registerLine" @click="goRegister">注册账号</div>
      </div>
      <div v-show="!isLogin">
        <van-form @submit="onRegisterSubmit">
          <van-field
              v-model="registerForm.username"
              name="用户名"
              label="用户名"
              placeholder="请输入用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="registerForm.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
              v-model="registerForm.password2"
              type="password"
              name="确认密码"
              label="确认密码"
              placeholder="请再次输入密码"
              @blur="checkPassword" 
              :error-message="errMsg"
          />
          <van-radio-group v-model="registerForm.radio" direction="horizontal">
              <van-radio name="1" icon-size="0.5rem">我要入驻赚钱</van-radio>
              <van-radio name="2" icon-size="0.5rem">我要雇佣作者</van-radio>
          </van-radio-group>
          <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>
        <div class="registerLine" @click="goLogin">已有账号？马上登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      //是否为登陆界面
      isLogin:true,
      loginForm:{
        username:'',
        password:''
      },
      registerForm:{
        username:'',
        password:'',
        password2:'',
        radio:'1'
      },
      //验证两次密码是否一致，提示信息
      errMsg:''
    }
  },
  methods:{
    //登录提交
    onLoginSubmit(){
      console.log(this.loginForm)
    },
    //注册提交
    onRegisterSubmit(){
      this.checkPassword()
      console.log(this.registerForm)
    },
    goRegister(){
      this.isLogin=false
    },
    goLogin(){
      this.isLogin=true
    },
    checkPassword(){
      if(this.registerForm.password2==""){
        this.errMsg="请填写确认密码！"
      }else{
        if(this.registerForm.password2!==this.registerForm.password){
          this.errMsg="两次输入密码不一致！"
        }else{
          this.errMsg=''
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
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
  height: 4.1rem;
  margin-left: 0.5rem;
}
.loginForm{
    width: calc(96%-0.4rem);
    margin-left: 2%;
    margin-right: 2%;
    margin-top:1.5rem;
    border-radius: .25rem;
    background-color: rgba(255, 255, 255, 0.9);
    padding:0.2rem 0.4rem 0.5rem 0.4rem;
}
.van-cell{
  line-height: 1.2rem;
  font-size: 0.5rem;
  background-color: transparent;
}
.van-radio-group{
  font-size: 0.5rem;
  height: 1.1rem;
  margin-left: 0.6rem;
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
.registerLine{
  color: #1989fa;
  font-size: 0.43rem;
  text-align: center;
}
</style>