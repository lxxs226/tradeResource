<!--接单方任务管理-->
<template>
  <div class="userTaskManage">

    <van-search  v-model="searchTask" input-align="center"  shape="round" placeholder="请输入搜索关键词" />

    <div class="userTaskList">
      <van-tabs line-width="1rem" line-height=".06rem" v-model="active" swipeable @change="getTaskByWriter()">
        <van-tab title="待编辑">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index" v-else>
            <router-link :to="{name:'articleContent',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="taskDemandContent">{{item.require}}</div>
              <div class="userTaskDetail">
                <div class="userTaskDetailLeft">
                  <div>截稿日期：{{item. projectendday}}</div>
                  <div class="userTaskIncome">稿酬：{{item.income}}元</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="待修改">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index" v-else>
            <router-link :to="{name:'articleContent',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="modifyAdviseContent" v-html="item.contect"></div>
              <div class="userTaskDetail">
                <div class="userTaskDetailLeft">
                  <div>截稿日期：{{item.projectendday}}</div>
                  <div class="userTaskIncome">稿酬：{{item.income}}元</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="已提交">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index" v-else>
            <router-link :to="{name:'articleDetail',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="userTaskContent" v-html="item.contect"></div>
              <div class="userTaskDetail">
                <div class="userTaskDetailLeft">
                  <div>交稿日期：{{item.draftDate}}</div>
                  <div class="userTaskIncome">稿酬：{{item.income}}元</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="已合格">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index" v-else>
            <router-link :to="{name:'articleDetail',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="userTaskContent" v-html="item.contect"></div>
              <div class="userTaskDetail">
                <div class="userTaskDetailLeft">
                  <div>完成日期：{{item.endday}}</div>
                  <div class="userTaskIncome">稿酬：{{item.income}}元</div>
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
  name: 'userTaskManage',
  data(){
    return{
      userId:localStorage.getItem('userName'),
      searchTask:'',
      active:0,
      noData:false,
      userTaskLists:[
      //   {
      //     userTaskSubject:'配眼镜有哪些必须避开的陷阱？',
      //     content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
      //     submissionDate:'2月3日',
      //     closingDate:'2月8日',
      //     completeDate:'2月8日',
      //     demandContent:'任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求',
      //     adviseContent:'修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议',
      //     income:10,
      //  }
      ]
    }
  },
  created(){
    this.getTaskByWriter()
    console.log(this.$route.params.active)
    this.active = this.$route.params.active;
  },
  methods:{
      //获取任务、文稿、订单信息
      getTaskByWriter(){
        console.log(this.active)
        let that = this
        this.axios({
            method: 'get',
            url: 'task/getTaskByWriter',
            data:{
              userId: this.userId,
              active: this.active,
              searchTask: this.searchTask
            }
        }).then(function(res){
            console.log(res)
            if(res.data.success===true){
              if(res.data.userTaskLists.length==0){
                that.noData=true
              }else{
                console.log(res.data.userTaskLists)
                that.userTaskLists=res.data.userTaskLists
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
.userTaskManage{
  width: 100%;
}
.van-cell{
  font-size: 0.35rem;
  line-height: 1rem;
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
.userTaskItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.userTaskSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.userTaskContent{
  margin-left: 2%;
  line-height: 0.5rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
 
}
.articleSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.modifyAdviseContent{
  margin-left: 2%;
  line-height: 0.5rem;
}
.taskDemandContent{
  margin-left: 2%;
  line-height: 0.5rem;
}
.userTaskDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.userTaskDetailLeft{
  width: 67%;
}
.userTaskIncome{
  font-size: .43rem;
  font-weight: bold;
  color: #6C9EE9;
}
.articlebox{
  display: flex;
  justify-content: space-between;
}
.overdue{
  margin-top:0.1rem;
  margin-right: 0.3rem;
}
.nodata{
  color:#909399;
  font-size: 0.3rem;
  line-height: 600px;
  text-align: center;
}
</style>