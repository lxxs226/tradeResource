<template>
    <div class="taskDetail">
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
        </div>
        <div class="detailContent">
            <div class="contentTitle">文章要求：</div>
            <div class="contentRequired">{{taskInformation.articleRequired}}</div>
            <div class="contentTitle">媒体分类：{{taskInformation.mediaClass}}</div>
            <div class="contentTitle">行业分类：{{taskInformation.industryClass}}</div>
            <div class="contentTitle">文章赏金：{{taskInformation.money}}元</div>
            <div class="contentTitle">截稿天数：{{taskInformation.endDay}}天</div>
        </div>
        <div class="buttonLineUser" v-if="status">
            <van-button type="info" size="large">接受任务</van-button>
        </div>
        <div class="buttonLinePulisher" v-else>
            <van-button type="info" size="normal">编辑</van-button>
            <van-button type="info" size="normal" class="buttonDelete">删除</van-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'taskDetail',
    data(){
        return{
            taskInformation:{
                taskTitle:'情侣热恋期之后如何保持感情？',//文章标题
                publisher:'赵丽颖',//发布人
                publishDate:'2021年1月31日',//发布时间
                articleRequired:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水',//文章要求
                mediaClass:'知乎',//媒体分类
                industryClass:'情感 营销',//行业分类
                money:'10',//文章赏金
                endDay:'3'//截稿天数
            },
            //用户身份判断，显示不同按钮：true为接单方 false为下单方
            status:false
        }
    }
}
</script>
<style lang="scss" scoped>
.taskDetail{
    width: 90%;
    margin-left: 5%;
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
}
.detailContent{
    margin-top: 0.5rem;
}
.contentTitle{
    line-height: 0.9rem;
    font-size: 0.37rem;
}
.contentRequired{
    line-height: 0.5rem;
    color: #808080;
    font-size: 0.35rem;
}
.buttonLineUser{
    position:fixed;
    bottom: 1.5rem;
    width: 90%;
}
.van-button--large{
    height: 1.2rem;
}
.van-button--info{
    background-color: #169bd5;
    border: 0.026667rem solid #169bd5;
}
.van-button{
    font-size: 0.4rem;
}
.buttonLinePulisher{
    position:fixed;
    bottom: 1.5rem;
    width: 90%;
    .van-button{
        width: 45%;
    }
}
.buttonDelete{
    margin-left: 10%;
    background-color: #fff;
    color: #169bd5;
}
</style>