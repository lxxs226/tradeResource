<!--雇佣方任务管理-->
<template>
  <div class="companyTaskManage">
    <!-- 搜索框 -->
    <div class="nav">
     <van-icon name="add-o" size=".75rem" @click="gotoPublish"/>
     <van-search  v-model="searchTask" input-align="center" shape="round" placeholder="请输入搜索关键词" @search="getTask"/>
    </div>

    <div class="companyTaskList">
      <van-tabs v-model="active" line-width="1.4rem" line-height=".06rem" swipeable @change="getTask()">
        <van-tab title="待接任务">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="companyTaskItem" v-for="(item,index) in companyTaskLists" :key="index" v-else>
            <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
              <div class="companyTaskSubjectTitle">{{item.recommendSubject}}</div>
              <div class="companyTaskDetail">
                <div class="companyTaskDetailLeft">
                  <div>行业分类：{{item.industryCategory}}</div>
                  <div>媒体分类：{{item.mediaCategory}}</div>
                </div>
                <div class="companyTaskDetailRight">
                  <div>截稿天数：{{item.pressNumber}}天</div>
                  <div class="companyTaskIncome">稿酬：{{item.income}}元</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="已接任务">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="companyTaskItem" v-for="(item,index) in companyTaskLists" :key="index" v-else>
            <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
              <div class="companyTaskSubjectTitle">{{item.recommendSubject}}</div>
              <div class="companyTaskDetail">
                <div class="companyTaskDetailLeft">
                  <div>行业分类：{{item.industryCategory}}</div>
                  <div>媒体分类：{{item.mediaCategory}}</div>
                </div>
                <div class="companyTaskDetailRight">
                  <div>截稿天数：{{item.pressNumber}}天</div>
                  <div class="companyTaskIncome">稿酬：{{item.income}}元</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyTaskManage',
  data(){
    return{
      searchTask:'',
      active: 0,
      companyTaskLists:[{
          recommendSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        }
      ],
      userId:localStorage.getItem('userName'),
      noData:false
    }
  },
  created(){
    this.getTask()
  },
  methods:{
    //点击+跳转到发布任务
    gotoPublish(){
      this.$router.push('/publishTask')
    },
    //获取任务(根据用户id，以及所处状态)
    getTask(){
      console.log(this.active)
      let that = this
      this.axios({
          method: 'get',
          url: 'task/getTaskByUser',
          data:{
            userId: this.userId,
            active: this.active,
            searchTask: this.searchTask
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            if(res.data.companyTaskLists.length==0){
              that.noData=true
            }else{
              that.companyTaskLists=res.data.companyTaskLists
              that.noData=false
            }
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
.companyTaskManage{
  width: 100%;
}
.nav{
  height: 1rem;
  display: flex;
  margin-left: 2%;
  margin-top: 2%;
}
.van-cell{
  font-size: .35rem;
  line-height: .75rem;
  width: 8.5rem;
}
.van-icon{
  margin-top: .1rem;
}
/deep/.van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 0.5rem;
}

/deep/.van-tabs--line .van-tabs__wrap{
  height: 1rem !important;
}
/deep/.van-tab{
  font-size: 0.35rem;
  line-height: 0.8rem;
  text-align:center;
}
.companyTaskItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.companyTaskSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.companyTaskDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.companyTaskDetailLeft{
  width: 67%;
}
.companyTaskIncome{
  font-size: .43rem;
  font-weight: bold;
  color: #6C9EE9;
}
.nodata{
  color:#909399;
  font-size: 0.3rem;
  line-height: 600px;
  text-align: center;
}
</style>