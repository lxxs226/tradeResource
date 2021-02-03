<!--任务大厅-->
<template>
  <div class="taskHall">
    <van-search  v-model="searchTask" input-align="center" shape="round" placeholder="请输入搜索关键词" />
    <van-dropdown-menu active-color="#6C9EE9">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <div class="hallTaskItem" v-for="(item,index) in hallTaskLists" :key="index">
            <div class="hallTaskSubjectTitle">{{item.hallTaskSubject}}</div>
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
          </div>

  </div>
</template>

<script>
export default {
  name: 'taskHall',
  data(){
    return{
      searchTask:'',
      value1: 0,
      value2: 'a',
      option1: [
        { text: '媒体分类', value: 0 },
        { text: '知乎', value: 1 },
        { text: '微博', value: 2 },
        { text: '今日头条', value: 3 },
        { text: '搜狐', value: 4 },
        { text: '网易', value: 5 },
        { text: '企鹅', value: 6 },
        { text: '新浪看点', value: 7 },
        { text: '一点资讯', value: 8 },
        { text: '东方头条', value: 9 },
        { text: '趣头条', value: 10 },
        { text: '豆瓣', value: 11 },
        { text: '简书', value: 12 },
        { text: '懂车帝', value: 13 },
        { text: '其他', value: 14 },
      ],
      option2: [
        { text: '行业分类', value: 'a' },
        { text: '情感', value: 'b' },
        { text: '生活', value: 'c' },
        { text: '营销', value: 'd' },
        { text: '资讯', value: 'e' },
        { text: '互联网', value: 'f' },
        { text: '财经', value: 'g' },
        { text: '汽车', value: 'h' },
        { text: '旅游', value: 'i' },
        { text: '动漫', value: 'j' },
        { text: '美食', value: 'k' },
        { text: '科技', value: 'l' },
        { text: '美妆', value: 'm' },
        { text: '时尚', value: 'n' },
        { text: '房产', value: 'o' },
        { text: '娱乐', value: 'p' },
        { text: '搞笑', value: 'q' },
        { text: '影视', value: 'r' },
        { text: '健康', value: 's' },
        { text: '职场', value: 't' },
        { text: '宠物', value: 'u' },
        { text: '摄影', value: 'v' },
        { text: '其他', value: 'w' },
      ],
      hallTaskLists:[{
          hallTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          hallTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          hallTaskSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          hallTaskSubject:'情侣热恋期之后如何保存感情？',
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
  border-bottom: .0003rem solid  #808080;
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
</style>