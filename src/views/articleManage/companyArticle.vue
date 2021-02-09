<!--雇佣者文稿管理-->
<template>
  <div class="companyArticle">
  
    <van-search  v-model="searchTask" input-align="center"  shape="round" placeholder="请输入搜索关键词" />

    <div class="companyArticleList">
      <van-tabs line-width="1.1rem" line-height=".06rem" v-model="active" swipeable>
        <van-tab title="待审核">
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index">
            <div class="articleSubjectTitle">{{item.articleSubject}}</div>
            <div class="articleContent">{{item.content}}</div>
            <div class="articleDetail">
              <div class="articleDetailLeft">
                <div>交稿人：{{item.writer}}</div>
                <div>交稿日期：{{item.submissionDate}}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="未提交">
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index">
            <div class="articleSubjectTitle">{{item.articleSubject}}</div>
            <div class="articleDetail">
              <div class="articleDetailLeft">
                <div>接稿人：{{item.writer}}</div>
                <div>接稿日期：{{item.acceptDate}}</div>
                <div>截稿日期：{{item. closingDate}}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已合格">
          <div class="articleItem" v-for="(item,index) in articleLists" :key="index">
            <div class="articleSubjectTitle">{{item.articleSubject}}</div>
            <div class="articleContent">{{item.content}}</div>
            <div class="articleDetail">
              <div class="articleDetailLeft">
                <div>交稿人：{{item.writer}}</div>
                <div>完成日期：{{item.completeDate}}</div>
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
  name: 'companyArticle',
  data(){
    return{
      searchTask:'',
      active: '',
      articleLists:[{
          articleSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          writer:'吴亦凡',
          submissionDate:'2月3日',
          acceptDate:'2月1日',
          closingDate:'2月8日',
          completeDate:'2月8日'
        },{
          articleSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          writer:'吴亦凡',
          submissionDate:'2月3日',
          acceptDate:'2月1日',
          closingDate:'2月8日',
          completeDate:'2月8日'
        },{
          articleSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          writer:'吴亦凡',
          submissionDate:'2月3日',
          acceptDate:'2月1日',
          closingDate:'2月8日',
          completeDate:'2月8日'
        },{
          articleSubject:'配眼镜有哪些必须避开的陷阱？',
          content:'不推荐去小眼镜店，因为一般小的眼镜店里面的验光师水平层次不齐验光不准会导致眼睛容易疲劳度数上涨而且你们以为眼镜只要验光。',
          writer:'吴亦凡',
          submissionDate:'2月3日',
          acceptDate:'2月1日',
          closingDate:'2月8日',
          completeDate:'2月8日'
        }
      ]
      

    }
  },
  methods:{
    
    
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
</style>