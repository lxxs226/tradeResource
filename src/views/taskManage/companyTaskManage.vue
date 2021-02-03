<!--雇佣方任务管理-->
<template>
  <div class="companyTaskManage">
    <!-- 搜索框 -->
    <div class="nav">
     <van-icon name="add-o" size="1rem" />
     <van-search  v-model="searchTask" input-align="center" shape="round" placeholder="请输入搜索关键词" />
    </div>

    <div class="companyTaskList">
      <van-tabs v-model="active" line-width=1.4rem>
        <van-tab title="待接任务">
          <div class="companyTaskItem" v-for="(item,index) in companyTaskLists" :key="index">
            <div class="companyTaskSubjectTitle">{{item.companyTaskSubject}}</div>
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
          </div>
        </van-tab>
        <van-tab title="已接任务">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyTaskManage',
  data(){
    return{
      searchTask: '',
      active: '',
      companyTaskLists:[{
          companyTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          companyTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          companyTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          companyTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        }
      ]


    }
  },
  methods:{
    
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
  padding-right: 5rem;
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
  border-bottom: .0003rem solid  #808080;
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

</style>