<!--任务大厅-->
<template>
  <div class="taskHall">
    <van-search  v-model="searchTask" input-align="center" shape="round" placeholder="请输入搜索关键词" @search="getTaskBySearch"/>
    <van-dropdown-menu active-color="#6C9EE9">
      <van-dropdown-item v-model="value1" :options="option1" @change="getTask()"/>
      <van-dropdown-item v-model="value2" :options="option2" @change="getTask()"/>
    </van-dropdown-menu>
    <div v-if="noData" class="nodata">暂无相关任务</div>
    <div class="hallTaskItem" v-for="(item,index) in hallTaskLists" :key="index" v-else>
      <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
        <div class="hallTaskSubjectTitle">{{item.recommendSubject}}</div>
        <div class="hallTaskDetail">
          <div class="hallTaskDetailLeft">
            <div>行业分类：{{item.industryCategory}}</div>
            <div>媒体分类：{{item.mediaCategory}}</div>
          </div>
          <div class="hallTaskDetailRight">
            <div>截稿天数：{{item.pressNumber}}天</div>
            <div class="hallTaskIncome">稿酬：{{item.income}}元</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskHall',
  data(){
    return{
      searchTask:'',
      value1: 15,//媒体类别
      value2: '22',//行业分类
      option1: [
        { text: '媒体分类', value: 15},
        { text: '知乎', value: 0 },
        { text: '微博', value: 1 },
        { text: '豆瓣', value: 2 },
        { text: '今日头条', value: 3 },
        { text: '懂车帝', value: 4 },
        { text: '搜狐', value: 5 },
        { text: '网易', value: 6 },
        { text: '企鹅', value: 7 },
        { text: '新浪看点', value: 8 },
        { text: '一点资讯', value: 9 },
        { text: '东方头条', value: 10 },
        { text: '太平洋号', value: 11 },
        { text: '趣头条', value: 12 },
        { text: '简书', value: 13 },
        { text: '其他', value: 14 }
      ],
      option2: [
        { text: '行业分类', value: '22' },
        { text: '情感', value: '0' },
        { text: '生活', value: '1' },
        { text: '营销', value: '2' },
        { text: '资讯', value: '3' },
        { text: '互联网', value: '4' },
        { text: '财经', value: '5' },
        { text: '汽车', value: '6' },
        { text: '旅游', value: '7' },
        { text: '动漫', value: '8' },
        { text: '美食', value: '9' },
        { text: '科技', value: '10' },
        { text: '美妆', value: '11' },
        { text: '时尚', value: '12' },
        { text: '房产', value: '13' },
        { text: '娱乐', value: '14' },
        { text: '搞笑', value: '15' },
        { text: '影视', value: '16' },
        { text: '健康', value: '17' },
        { text: '职场', value: '18' },
        { text: '宠物', value: '19' },
        { text: '摄影', value: '20' },
        { text: '其他', value: '21' }
      ],
      hallTaskLists:[
        // {
        //   recommendSubject:'情侣热恋期之后如何保存感情？',
        //   industryCategory:'营销 情感',
        //   mediaCategory:'知乎',
        //   pressNumber:5,
        //   income:10
        // }
      ],
      noData:false
    }
  },
  created(){
    this.getTask()
  },
  methods:{
    //获取任务（根据类别）
    getTask(){
      let that = this
      this.axios({
          method: 'get',
          url: 'task/getTask',
          data:{
            mediaId: this.value1,
            industryId: this.value2
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            if(res.data.hallTaskLists.length==0){
              that.noData=true
            }else{
              that.hallTaskLists=res.data.hallTaskLists
              that.noData=false
            }
          }else{
            // that.$toast.fail(res.data.msg);
          }
      }).catch(err=>{
          console.log(err)
      })
    },
    //获取任务（根据搜索内容）
    getTaskBySearch(){
    let that = this
      this.axios({
          method: 'get',
          url: 'task/getTaskBySearch',
          data:{
            searchTask: this.searchTask,
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            that.value1=15,
            that.value2='22'
            if(res.data.hallTaskLists.length==0){
              that.noData=true
            }else{
              that.hallTaskLists=res.data.hallTaskLists
              that.noData=false
            }
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
.taskHall{
  width: 100%;
}
.van-cell{
  font-size: 0.35rem;
  line-height: 1rem;
}
/deep/.van-cell__title{
  font-size: 0.3rem;
  line-height: 0.5rem;
}
/deep/.van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
  font-size: 0.5rem;
}
/deep/.van-dropdown-menu__title{
  font-size: .35rem;
  line-height: 0.9rem;
}
.van-dropdown-menu__item{
  padding-top: 1rem;
}
/deep/.van-dropdown-menu__bar{
  height: 1rem;
  box-shadow:10px 10px 5px #ffffff;
}
.hallTaskItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.hallTaskSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.hallTaskDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.hallTaskDetailLeft{
  width: 67%;
}
.hallTaskIncome{
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