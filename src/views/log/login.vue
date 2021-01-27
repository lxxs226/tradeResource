<!--登录-->
<template>
  <div class="login">
    <div class="loginForm">
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
        username:'',
        password:''
    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>
<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background: url(../../assets/pic/loginbg.png);
    background-repeat:no-repeat;
    -moz-background-size:100% 100%;
    background-size:100% 100%;
    opacity: 0.65;
    z-index:-1;
    display: flex;
    align-items: center;
}
.loginForm{
    width: 96%;
    margin-left: 2%;
    height: 6.25rem;
    border-radius: .25rem;
    background-color: rgba(255, 255, 255, 0.7);
}
.van-cell{
  line-height: 40px;
  font-size:18px;
}
</style>