<template>
  <div class="home">
    <!--轮播图-->
    <div class="homeSwipe">
      <van-swipe :autoplay="3000" indicator-color="white" class="homeSwipeContert">
        <van-swipe-item>
          <img src="../assets/pic/homepic1.png" class="swipePic"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/pic/homepic2.png" class="swipePic"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/pic/homepic3.png" class="swipePic"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--推荐列表-->
    <div class="homeRecommendList">
      <div class="recommendListTitle">
        推荐任务
      </div>
      <van-tabs v-model="active" line-height=".06rem" line-width="1.3rem" swipeable>
        <van-tab>
          <template #title><img src="../assets/pic/zhihu.png" class="recommendListTitleIcon" style="width:22%;height:22%"/>知乎</template>
          <div class="recommendItem" v-for="(item,index) in recommendLists" :key="index">
            <div class="recommendSubjectTitle">{{item.recommendSubject}}</div>
            <div class="recommendDetail">
              <div class="recommendDetailLeft">
                <div>行业分类：{{item.industryCategory}}</div>
                <div>媒体分类：{{item.mediaCategory}}</div>
              </div>
              <div class="recommendDetailRight">
                <div>截稿天数：{{item.pressNumber}}天</div>
                <div class="recommendIncome">稿酬：{{item.income}}元</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab>
          <template #title><img src="../assets/pic/weibo2.jpg" class="recommendListTitleIcon" style="width:20%;height:20%"/>微博</template>
          内容 2</van-tab>
        <van-tab>
          <template #title><img src="../assets/pic/douban.png" class="recommendListTitleIcon" style="width:25%;height:25%"/>豆瓣</template>
          内容 3</van-tab>
      </van-tabs>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      //标签页默认选择第一项
      active:0,
      recommendLists:[{
          recommendSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          recommendSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          recommendSubject:'情侣热恋期之后如何保存感情？',
          industryCategory:'营销 情感',
          mediaCategory:'知乎',
          pressNumber:5,
          income:10
        },{
          recommendSubject:'情侣热恋期之后如何保存感情？',
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
.home{
  width: 100%;
  // height: calc(100% - 1.6rem);
}
.homeSwipe{
  height: 5rem;
  margin: 2%;
}
.homeSwipeContert{
  border-radius: 0.25rem;
}
.swipePic{
  width: 100%;
  height: 5rem;
}
.homeRecommendList{
  margin-top: .3125rem;
}
.recommendListTitle{
  font-size: .55rem;
  font-weight: bold;
  margin-left: 2%;
}
/deep/.van-tabs--line .van-tabs__wrap{
  height: 1.1rem !important;
}
/deep/.van-tab{
  font-size: 0.35rem;
  line-height: 0.8rem;
  text-align:center;
}
.recommendListTitleIcon{
  vertical-align:middle;
  margin-right: .2rem;
}
/deep/.van-tabs__line{
  width: 0.7rem;
}
.recommendItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.recommendSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.recommendDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.recommendDetailLeft{
  width: 67%;
}
.recommendIncome{
  font-size: .43rem;
  font-weight: bold;
  color: #6C9EE9;
}
</style>
