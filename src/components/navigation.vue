<template>
  <div class="navigation">
    <van-tabbar v-model="active" route fixed border>
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/companyTaskManage" icon="completed">任务管理</van-tabbar-item>
      <van-tabbar-item replace to="/companyArticle" icon="records" >文稿管理</van-tabbar-item>
      <van-tabbar-item replace to="/userIndex" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      active:0,
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.van-tabbar{
  height: 1.6rem;
}
.van-tabbar-item{
  font-size: .4rem;
}

</style>