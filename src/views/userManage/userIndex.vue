<!--我的-->
<template>
  <div class="userIndex">
    <router-link :to="{name:'userInformation'}"> 
      <div class="userInformation">
          <img src="@/assets/pic/touxiang.png" class="logoPic"/>
          <div class="userContent">
            <div class="userNameContent">{{userName}}</div>
            <div class="userIdContent">ID:{{userId}}</div>
          </div>
      </div>
    </router-link>
    <div class="userInformation userTodo" v-if="userIdentity=='1'">
      <div class="mytodo">我的待办</div>
      <div class="mytodoDetail">
        <div class="aboutArticle toWriteArticle" @click="gotoUserTaskManage(0)">
          <div class="towrite contentCenter" >待编辑文章</div>
          <div class="towrite"><span class="articleNum">{{writeNum}}</span> 篇</div>
        </div>
        <div class="aboutArticle" @click="gotoUserTaskManage(1)">
          <div class="towrite contentCenter">待修改文章</div>
          <div class="towrite"><span class="articleNum">{{updateNum}}</span> 篇</div>
        </div>
      </div>
    </div>
    <div class="userInformation userTodo" v-else>
      <div class="mytodo">我的待办</div>
      <div class="mytodoDetail">
        <div class="aboutArticle toWriteArticle" @click="gotoCompanyArticle">
          <div class="towrite contentCenter" >待审核文章</div>
          <div class="towrite"><span class="articleNum">{{lookNum}}</span> 篇</div>
        </div>
        <div class="aboutArticle" @click="gotoCompanyTaskManage">
          <div class="towrite contentCenter">待接任务</div>
          <div class="towrite"><span class="articleNum">{{waitNum}}</span> 篇</div>
        </div>
      </div>
    </div>
    <div class="userInformation userTodo userInf">
      <div class="mytodo">我的信息</div>
      <div class="mytodoDetail">
        <div class="aboutArticle toWriteArticle">
          <div class="towrite contentCenter"><router-link :to="{name:'userEdit'}"> 修改信息</router-link></div>
        </div>
        <div class="aboutArticle">
          <div class="towrite contentCenter" @click="gotoAccountDetail">我的账单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userIndex',
  data(){
    return{
      userName:localStorage.getItem('userName'),
      userId:localStorage.getItem('userId'),
      writeNum:'',
      updateNum:'',
      lookNum:'',
      waitNum:'',
      userIdentity:localStorage.getItem('userIdentity')
    }
  },
  created(){
    this.getNum()
  },
  methods:{
    gotoAccountDetail(){
      this.$router.push({name:'accountDetail',params: { userName: this.userName }})
    },
    //需方跳转到编辑任务
    gotoCompanyArticle(){
      this.$router.push({name:'companyArticle'})
    },
    //需方跳转到编辑任务
    gotoCompanyTaskManage(){
      this.$router.push({name:'companyTaskManage'})
    },
    gotoUserTaskManage(active){
      this.$router.push({name:'userTaskManage',params: { active: active }})
    },
    //获取一堆篇数
    getNum(){
      let that = this
      this.axios({
        method: 'get',
        url: 'task/getNum',
        data:{
          userId: this.userName,
          userIdentity:this.userIdentity
        }
      }).then(function(res){
        console.log(res)
        if(res.data.success===true){
          that.writeNum=res.data.writeNum
          that.updateNum=res.data.updateNum
          that.lookNum=res.data.lookNum
          that.waitNum=res.data.waitNum
        }else{
          // that.$toast.fail(res.data.msg);
        }
      }).catch(err=>{
        console.log(err)
      })
    }
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
  width:  92%;
  height: 4rem;
  margin-top: 0.5rem;
  padding: 0rem;
  // border-radius: 0.15rem;
  display: flex;
  flex-direction: column;
  // margin-left: 8%;
}
.userInf{
  height: 2.8rem;
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
  font-size: .45rem;
  width: calc(100% - 0.5rem);
  padding: 0.3rem;
  border-bottom: 2px solid #f2f2f2;
}
.mytodoDetail{
  display: flex;
  flex-direction: row;
  flex:1;
}
.contentCenter{
  line-height: 1.4rem;
}
.aboutArticle{
  width: 50%;
  text-align: center;
}
.toWriteArticle{
  border-right: 2px solid #f2f2f2;;
}
.towrite{
  font-size: .38rem;
}
.articleNum{
  color: #6C9EE9;
  font-size: .65rem;
  font-weight: bold;
}
</style>