<!--编辑资料-->
<template>
  <div class="userEdit">
    <div class="editForm">
      <van-cell-group>
        <van-field v-model="userInfo.name" label="昵称" placeholder="请输入昵称"/>
        <van-field v-model="userInfo.sex"  label="性别" placeholder="请输入性别"/>
        <van-field v-model="userInfo.age" type="digit" label="年龄" placeholder="请输入年龄"/>
        <van-field v-model="userInfo.occupation"  label="职业" placeholder="请输入职业"/>
        <van-field v-model="userInfo.tel" type="tel" label="联系方式" placeholder="请输入联系方式"/>
      </van-cell-group>
    </div>
    <div style="margin-top:0.6rem">
      <van-button type="info" size="large" style="height:1.1rem;font-size:0.38rem" @click="userInfoSubmit">确认</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userEdit',
  data(){
    return{
      userInfo:{
        name: localStorage.getItem('userName'),
        sex: '',
        age: '',
        occupation: '',
        tel: '',
      }
    }
  },
  created(){
      this.getUserInfo()
  },
  methods:{
    //用户信息提交
    userInfoSubmit(){
      let that = this
      this.axios({
          method: 'post',
          url: 'user/changeUserInfo',
          data:{
            name: this.userInfo.name,
            sex: this.userInfo.sex,
            age: this.userInfo.age,
            occupation: this.userInfo.occupation,
            tel:  this.userInfo.tel
          }
      }).then(function(res){
          if(res.data.success===true){
            that.$toast.success({
                message: res.data.msg,
                duration : 500
            });
            that.getUserInfo()
            // that.$router.push('/Home');
          }else{
            that.$toast.fail(res.data.msg);
          }
      }).catch(err=>{
          console.log(err)
      })

    },
    //获取用户信息
    getUserInfo(){
      let that = this
      this.axios({
          method: 'get',
          url: 'user/getUserInfo',
          data:{
            username: this.userInfo.name,
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            that.userInfo=res.data.userInfo
          }else{
            // that.$toast.fail(res.data.msg);
          }
      }).catch(err=>{
          console.log(err)
      })

    },
  }
}
</script>
<style lang="scss" scoped>
.userEdit{
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #f7f8fa;
}

.van-cell{
  font-size: 0.35rem;
  line-height: 1rem;
}

/deep/.van-field__control{
  text-align: right;
  margin-right: .3rem;
  color: rgb(39, 27, 212);
}
.buttonLinePulisher{
  position:fixed;
  bottom: 1rem;
  width: 90%;
  .van-button{
    width: 40%;
  }
  .buttonDelete{
    margin-left: 2%;
    margin-right: 15%;
    background-color: #fff;
    color: #169bd5;
  }
}
</style>