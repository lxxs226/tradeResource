<template>
    <div class="articleDetail">
        <div class="detailTop">
            <div class="detailTitle">
                {{taskInformation.taskTitle}}
            </div>
            <div class="detailpublish">
                <div>
                    发布人：<span style="color:#83cfff;">{{taskInformation.publisher}}</span>
                </div>
                <div>
                    发布任务日期：{{taskInformation.publishDate}}
                </div>
            </div>
            <div class="contentRequired">任务要求：{{taskInformation.articleRequired}}</div>
            <div class="detailpublish">
                <div>
                    交稿人：<span style="color:#83cfff;">{{finishArticle.writer}}</span>
                </div>
                <div>
                    交稿日期：{{finishArticle.finishDate}}
                </div>
            </div>
        </div>
        <div class="detailContent">
            <div class="detailContentTitle">文稿内容:</div>
            <div class="detailContentDetail">{{articleContent}}</div>
        </div>
        <div class="detailpublish">
            <div>
                审核人：<span style="color:#83cfff;">{{passArticle.passPeople}}</span>
            </div>
            <div>
                交稿日期：{{passArticle.passDate}}
            </div>
        </div>
        <!--发布者首次待审核-->
        <!-- <div class="buttonLinePulisher" >
            <van-button type="info" size="normal" class="buttonDelete" @click="createAdvive=true">发起修改</van-button>
            <van-button type="info" size="normal">文章合格</van-button>
        </div> -->
        <!--接单者经过修改后再次待审核-->
        <div class="buttonLineUpdate" >
            <van-button type="info" size="normal" class="buttonDelete" @click="showOldAdvice=true">修改意见</van-button>
            <van-button type="info" size="normal" class="buttonDelete" @click="createAdvive=true">发起修改</van-button>
            <van-button type="info" size="normal">文章合格</van-button>
        </div>
        <!--查看历史修改意见-->
        <van-dialog v-model="showOldAdvice" title="历史修改意见" class="adviceDialog" close-on-click-overlay>
            <div class="advicediv">
                <div>发出修改日期：{{updateAdvice.adviceDate}}</div>
                <div>修改截至日期：{{updateAdvice.finishUpdateDate}}</div>
                <div class="adviceContent">修改建议：{{updateAdvice.advice}}</div>
            </div>
        </van-dialog>
        <!--发布修改意见-->
        <van-dialog v-model="createAdvive" title="修改意见" class="adviceDialog" close-on-click-overlay showCancelButton>
            <van-field
                v-model="adviceMessage"
                rows="6"
                autosize
                type="textarea"
                maxlength="200"
                placeholder="请输入修改意见"
                show-word-limit
                />
        </van-dialog>
    </div>
</template>
<script>
export default {
    name:'articleDetail',
    data(){
        return{
            taskInformation:{
                taskTitle:'情侣热恋期之后如何保持感情？',//文章标题
                publishDate:'2021年1月31日',//发布时间
                publisher:'赵丽颖',//发布人
                articleRequired:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水。',//文章要求
            },
            //交稿信息
            finishArticle:{
                writer:'吴亦凡',
                finishDate:'2021年1月13日'
            },
            articleContent:'我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章我是文章文章文章文章.',
            //通过信息
            passArticle:{
                passPeople:'赵丽颖',
                passDate:'2021年1月16日'
            },
            //之前的修改意见
            updateAdvice:{
                adviceDate:'2021年1月17日',
                finishUpdateDate:'2021年1月20日',
                advice:'我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议'
            },
            //之前发布的意见对话框
            showOldAdvice:false,
            //新建意见对话框
            createAdvive:false,
            //新的意见
            adviceMessage:''
        }
    }
}
</script>
<style lang="scss" scoped>
.articleDetail{
    width: 90%;
    margin-left: 5%;
}
.detailTop{
    margin-bottom:0.2rem;
}
.detailTitle{
  line-height: 1rem;
  font-size: 0.45rem;
  font-weight: 600;
}
.detailpublish{
    display: flex;
    justify-content: space-between;
    color: #808080;
    line-height: 0.7rem;
    font-size: 0.35rem;
    margin-right: 0.2rem;
}
.contentRequired{
    margin-top: 0.1rem;
    line-height: 0.5rem;
    color: #808080;
    font-size: 0.35rem;
    margin-bottom: 0.1rem;
}
.detailContent{
    font-size: 0.34rem;
    line-height: 0.56rem;
    color: #363636;
    margin-bottom: 0.8rem;
    .detailContentTitle{
        font-size: 0.37rem;
        line-height: 0.8rem;
        color: #000;
    }
}
.van-button--large{
    height: 90px;
}
.van-button--info{
    background-color: #169bd5;
    border: 0.026667rem solid #169bd5;
}
.van-button{
    height: 80px;
    font-size: 0.38rem;
    border-radius: 10px;
}
.buttonLinePulisher{
    position:fixed;
    bottom: 1rem;
    width: 90%;
    .van-button{
        width: 40%;
    }
    .buttonDelete{
        margin-left: 2%;
        margin-right: 15%;
        background-color: #fff;
        color: #169bd5;
    }
}
.buttonLineUpdate{
    position:fixed;
    bottom: 1rem;
    width: 90%;
    .van-button{
        width: 30%;
    }
    .buttonDelete{
        margin-right: 5%;
        background-color: #fff;
        color: #169bd5;
    }
}
.adviceDialog{
    width: 70%;
    padding:0.4rem 0.5rem 0.4rem 0.5rem;
     /deep/.van-button{
        font-size: 0.4rem;
    }
}
/deep/.van-dialog__header{
    line-height: 0.9rem !important;
    font-size: 0.43rem !important;
    padding-top:0px;
    margin-bottom: 0.2rem;
    border-bottom: 0.5px #ebedf0 solid;
}
.advicediv{
    line-height: 0.7rem;
    font-size: 0.35rem;
    margin-bottom: 0.3rem;
    .adviceContent{
        line-height: 0.55rem;
        margin-bottom: 0.2rem;
    }
}
/deep/.van-dialog__confirm, .van-dialog__confirm:active{
    margin-top: 0.2rem;
}
/deep/.van-dialog__cancel, .van-dialog__confirm{
    margin-top: 0.2rem;

}
</style>