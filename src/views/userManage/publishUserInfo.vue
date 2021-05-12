<!--用户资料-->
<template>
  <div class="publishUserInfo">
    <div class="pageTop">
      <img src="@/assets/pic/touxiang.png" class="logoPic"/>
      <div class="userContent">
        <div class="userNameContent">{{userInfo.name}}</div>
        <div class="userIdContent">ID:{{userId}}</div>
      </div>
    </div>
    <div class="userInf">
        <van-field label="性别：" :value="userInfo.sex" readonly />
        <van-field label="年龄：" :value="userInfo.age" readonly />
        <van-field label="职业：" :value="userInfo.occupation" readonly />
        <van-field label="联系方式：" :value="userInfo.tel" readonly />
    </div>
    <!-- <div style="margin-top:4rem">
      <van-button type="info" size="large" style="height:1.1rem;width:50%;margin-left:25%;border-radius:8px;font-size:0.38rem" @click="gotoChange">去填写</van-button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'userInformation',
  data(){
    return{
      userId:"",
      userInfo:{
        name: '暂无',
        sex: '暂无',
        age: '暂无',
        occupation: '暂无',
        tel: '暂无',
      }
    }
  },
  created(){
    this.userId = this.$route.params.userId;
    console.log(this.userId)
    this.getPublishUserInfo()
  },
  methods:{
    //获取用户信息
    getPublishUserInfo(){
      let that = this
      this.axios({
        method: 'get',
        url: 'user/getPublishUserInfo',
        data:{
          userId: this.userId,
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
    //跳转到修改信息页面
    // gotoChange(){
    //   this.$router.push('/userEdit');
    // }
    
  }
}
</script>
<style lang="scss" scoped>
.headPic{
  width: 22%;
  height: 22%;
  margin-left: 4%;
  margin-top: 2%;
}
.pageTop{
  display: flex;
  margin-left: 4%;
  margin-top: 4%;
}
.van-cell{
  font-size: .4rem;
  line-height: .5rem;
  margin-top: .35rem;
  margin-left: 8%;
}
.van-cell::after{
  border-bottom: 0rem;
}
.mainInf{
  margin-top: 10%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
}
.logoPic{
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}
.userContent{
  margin-left: .625rem;
}
.userNameContent{
  font-size: .43rem;
  font-weight:bold;
  line-height: 1rem;
}
.userIdContent{
  font-size: .40rem;
  letter-spacing: .03rem;
}
</style>