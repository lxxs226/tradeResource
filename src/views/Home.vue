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
      <van-tabs v-model="active" line-height=".06rem" line-width="1.3rem" swipeable @change="getRecommendTask()">
        <van-tab>
          <template #title><img src="../assets/pic/zhihu.png" class="recommendListTitleIcon" style="width:22%;height:22%"/>知乎</template>
          <div class="recommendItem" v-for="(item,index) in recommendLists" :key="index">
            <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
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
            </router-link>
          </div>
        </van-tab>
        <van-tab>
          <template #title><img src="../assets/pic/weibo2.jpg" class="recommendListTitleIcon" style="width:20%;height:20%"/>微博</template>
          <div class="recommendItem" v-for="(item,index) in recommendLists" :key="index">
            <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
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
            </router-link>
          </div>
        </van-tab>
        <van-tab>
          <template #title><img src="../assets/pic/douban.png" class="recommendListTitleIcon" style="width:25%;height:25%"/>豆瓣</template>
          <div class="recommendItem" v-for="(item,index) in recommendLists" :key="index">
            <router-link :to="{name:'taskDetail',params:{id:item.taskId}}">
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
            </router-link>
          </div>
        </van-tab>
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
      recommendLists:[
      //  {
      //     recommendSubject:'情侣热恋期之后如何保存感情？',
      //     industryCategory:'营销 情感',
      //     mediaCategory:'知乎',
      //     pressNumber:5,
      //     income:10
      //   },{
      //     recommendSubject:'情侣热恋期之后如何保存感情？',
      //     industryCategory:'营销 情感',
      //     mediaCategory:'知乎',
      //     pressNumber:5,
      //     income:10
      //   },{
      //     recommendSubject:'情侣热恋期之后如何保存感情？',
      //     industryCategory:'营销 情感',
      //     mediaCategory:'知乎',
      //     pressNumber:5,
      //     income:10
      //   },{
      //     recommendSubject:'情侣热恋期之后如何保存感情？',
      //     industryCategory:'营销 情感',
      //     mediaCategory:'知乎',
      //     pressNumber:5,
      //     income:10
      //   }
      ]
    }
  },
  created(){
    this.getUserId()
    // this.axios({
    //     method: 'post',
    //     // url: 'http://rap2api.taobao.org/app/mock/281845/user/register' //使用rap匹配
    //     url: 'user/register',
    //     // params:{
    //     //   aa:1
    //     // },
    //     data:{
    //       aa:1
    //     }
    // }).then(function(res){
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })

  },
  methods:{
    getUserId(){
      let userId=localStorage.getItem('userId')
      if(!userId && typeof(userId)!='undefined' && userId!=0){
        this.$router.push('/login');
      }else{
        this.getRecommendTask()
      }
    },
    //获取推荐任务列表
    getRecommendTask(){
      console.log(this.active)
      let that = this
      this.axios({
          method: 'get',
          url: 'task/getRecommendTask',
          data:{
            active: this.active,//选中的标签项
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            that.recommendLists=res.data.recommendLists
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
