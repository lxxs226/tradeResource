<!--用户资料-->
<template>
  <div class="userInformation">
    <div class="pageTop">
      <img src="@/assets/pic/touxiang.png" class="headPic" />
      <div class="mainInf">
        <!-- <van-field  value="赵丽颖" readonly  />
        <van-field  value="ID:154688" readonly /> -->
        <div class="nameInf">赵丽颖</div>
        <div class="idInf">ID:154688</div>
      </div>
    </div>

    <div class="userInf">
        <van-field label="性别：" :value="sex" readonly />
        <van-field label="年龄：" :value="age" readonly />
        <van-field label="职业：" :value="occupation" readonly />
        <van-field label="联系方式：" :value="tel" readonly />

    </div>


  </div>
</template>

<script>
export default {
  name: 'userInformation',
  data(){
    return{
      name: '赵丽颖',
      sex: '女',
      age: '20',
      occupation: '经理',
      tel: '13312312123',

    }
  },
  methods:{
     
    
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
}
.van-cell{
  font-size: .35rem;
  line-height: .5rem;
  margin-top: .3rem;
  margin-left: 3%;
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


</style>