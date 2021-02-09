<!--接单方任务管理-->
<template>
  <div class="userTaskManage">

    <van-search  v-model="searchTask" input-align="center"  shape="round" placeholder="请输入搜索关键词" />

    <div class="userTaskList">
      <van-tabs line-width="1rem" line-height=".06rem" v-model="active" swipeable>
        <van-tab title="待编辑">
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index">
            <div class="userTaskSubjectTitle">{{item.userTaskSubject}}</div>
            <div class="taskDemandContent">{{item.demandContent}}</div>
            <div class="userTaskDetail">
              <div class="userTaskDetailLeft">
                <div>截稿日期：{{item. closingDate}}</div>
                <div class="userTaskIncome">稿酬：{{item.income}}元</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="待修改">
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index">
            <div class="userTaskSubjectTitle">{{item.userTaskSubject}}</div>
            <div class="modifyAdviseContent">{{item.adviseContent}}</div>
            <div class="userTaskDetail">
              <div class="userTaskDetailLeft">
                <div>截稿日期：{{item. closingDate}}</div>
                <div class="userTaskIncome">稿酬：{{item.income}}元</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已提交">
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index">
            <div class="userTaskSubjectTitle">{{item.userTaskSubject}}</div>
            <div class="userTaskContent">{{item.content}}</div>
            <div class="userTaskDetail">
              <div class="userTaskDetailLeft">
                <div>交稿日期：{{item.submissionDate}}</div>
                <div class="userTaskIncome">稿酬：{{item.income}}元</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已合格">
          <div class="userTaskItem" v-for="(item,index) in userTaskLists" :key="index">
            <div class="userTaskSubjectTitle">{{item.userTaskSubject}}</div>
            <div class="userTaskContent">{{item.content}}</div>
            <div class="userTaskDetail">
              <div class="userTaskDetailLeft">
                <div>完成日期：{{item.completeDate}}</div>
                <div class="userTaskIncome">稿酬：{{item.income}}元</div>
              </div>
            </div>
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
      searchTask:'',
      userTaskLists:[{
          userTaskSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          submissionDate:'2月3日',
          closingDate:'2月8日',
          completeDate:'2月8日',
          demandContent:'任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求',
          adviseContent:'修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议',
          income:10,
        },{
          userTaskSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          submissionDate:'2月3日',
          closingDate:'2月8日',
          completeDate:'2月8日',
          demandContent:'任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求',
          adviseContent:'修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议',
          income:10,
        },{
          userTaskSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          submissionDate:'2月3日',
          closingDate:'2月8日',
          completeDate:'2月8日',
          demandContent:'任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求',
          adviseContent:'修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议',
          income:10,
        },{
          userTaskSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          submissionDate:'2月3日',
          closingDate:'2月8日',
          completeDate:'2月8日',
          demandContent:'任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求任务要求',
          adviseContent:'修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议修改建议',
          income:10,
        }
      ]

    }
  },
  methods:{
    
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
</style>