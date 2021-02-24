<!--我的-->
<template>
  <div class="userIndex">
    <div class="userInformation">
      <img src="@/assets/pic/bg2.png" class="logoPic"/>
      <div class="userContent">
        <div class="userNameContent">{{userName}}</div>
        <div class="userIdContent">ID:{{userId}}</div>
      </div>
    </div>
    <div class="userInformation userTodo">
      <!-- <div class="mytodo">我的待办</div> -->
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userIndex',
  data(){
    return{
      userName:'赵丽颖',
      userId:'132123456'
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.userIndex{
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #f7f8fa;
}
// 去掉滚动条
.userIndex::-webkit-scrollbar{
  display: none;
}
.userInformation{
  width:  calc(92% - 1rem);
  margin-left: 4%;
  margin-top: 4%;
  padding: .5rem;
  display: flex;
  background-color: #ffffff;
  height: 2rem;
  border-radius:.25rem;
  box-shadow:1px 1px 3px 3px rgba(192,192,192,.4) ;
}
.userTodo{
  height: 4rem;
  margin-top: 0.5rem;
  padding: 0rem;
  border-radius: 0.15rem;
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
.mytodo{
  font-size: .42rem;
  width: 100%;
  border-bottom: .05rem solid #f2f2f2;
}
</style>