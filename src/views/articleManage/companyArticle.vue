<!--雇佣者文稿管理-->
<template>
  <div class="companyArticle">
  
    <van-search  v-model="searchTask" input-align="center"  shape="round" placeholder="请输入搜索关键词" @search="getTask" />
    <div class="companyArticleList">
      <van-tabs line-width="1.1rem" line-height=".06rem" v-model="active" swipeable @change="getTask()">
        <van-tab title="待审核">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index" v-else>
            <router-link :to="{name:'articleDetail',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="articleContent" v-html="item.contect"></div>
              <div class="articleDetail">
                <div class="articleDetailLeft">
                  <div>交稿人：{{item.userName}}</div>
                  <div>交稿日期：{{item.draftDate}}</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="未提交">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index" v-else>
            <router-link :to="{name:'articleDetail',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="articleDetail">
                <div class="articleDetailLeft">
                  <div>接稿人：{{item.userName}}</div>
                  <div>接单日期：{{item.reateday}}</div>
                  <div>截稿日期：{{item.projectendday}}</div>
                </div>
              </div>
            </router-link>
          </div>
        </van-tab>
        <van-tab title="已合格">
          <div v-if="noData" class="nodata">暂无相关任务</div>
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index" v-else>
            <router-link :to="{name:'articleDetail',params:{taskId: item.taskId,orderId: item.orderId,draftId :item.draftId,writerName:item.userName}}">
              <div class="articlebox">
                <div class="articleSubjectTitle">{{item.recommendSubject}}</div>
                <van-icon name="bulb-o" size=".6rem" color="red" class="overdue" v-if="item.isOverDue==1"/>
              </div>
              <div class="articleContent" v-html="item.contect"></div>
              <div class="articleDetail">
                <div class="articleDetailLeft">
                  <div>交稿人：{{item.userName}}</div>
                  <div>完成日期：{{item.endday}}</div>
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
  name: 'companyArticle',
  data(){
    return{
      userId:localStorage.getItem('userName'),
      searchTask:'',
      active: 0,
      noData:false,
      articleLists:[{
          // articleSubject:'配眼镜有哪些必须避开的陷阱？',
          // content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          // writer:'吴亦凡',
          // submissionDate:'2月3日',
          // acceptDate:'2月1日',
          // closingDate:'2月8日',
          // completeDate:'2月8日'
        }
      ],

      // taskInformation:{
      //   taskId:'',
      //   recommendSubject:'情侣热恋期之后如何保持感情？',//文章标题
      //   publisher:'赵丽颖',//发布人
      //   Releaseday:'2021年1月31日',//发布时间
      //   require:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水',//文章要求
      //   mediaCategory:'知乎',//媒体分类
      //   industryCategory:'情感 营销',//行业分类
      //   income:'10',//文章赏金
      //   pressNumber:'3'//截稿天数
      // },
      // order:{
      //     orderId:'',
      //     taskId:'' , //对应任务id
      //     userId:'',  //接单人id
      //     status:0,  //订单状态 0：已开始  1：已完成
      //     reateday:'',//当前日期  接单日期
      //     endday:'',  //实际完成日期
      //     projectendday:'', //应当结束日期
      //     isOverDue:0,   //是否过期  0：未过期 1：已过期
      //     endmoney:'' //实际稿费
      // },
      // draft:{
      //     draftId:'',  //文稿id
      //     orderId:'',  //订单id 
      //     contect:'', //内容
      //     status:0,  // 文稿状态 0：待提交 1：已提交，待回复 2：未通过，待修改 3：已通过
      //     draftDate:'',  //文稿提交时间
      //     passedDate:'',  //文稿通过时间
      //     adviceid:'', //意见id
      // }
    }
  },
  created(){
    console.log(this.active)
    this.getTask()
  },
  methods:{
    //获取任务、文稿、订单信息
    getTask(){
      console.log(this.active)
      let that = this
      this.axios({
          method: 'get',
          url: 'task/getArticleList',
          data:{
            userId: this.userId,
            active: this.active,
            searchTask: this.searchTask
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            if(res.data.articleLists.length==0){
              that.noData=true
            }else{
              console.log(res.data.articleLists)
              that.articleLists=res.data.articleLists
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
.companyArticle{
  width: 100%;
}
.van-cell{
  font-size: 0.35rem;
  line-height: .75rem;
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
.articleItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.articleSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.articleContent{
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
.articleDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.articleDetailLeft{
  width: 67%;
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