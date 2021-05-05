<template>
    <div class="taskDetail">
        <div class="detailTop">
            <div class="detailTitle">
                {{taskInformation.recommendSubject}}
            </div>
            <div class="detailpublish">
                <div>
                    发布人：<span style="color:#83cfff;" @click="gotoUserInfo">{{taskInformation.publisher}}</span>
                </div>
                <div>
                    发布任务日期：{{taskInformation.Releaseday}}
                </div>
            </div>
        </div>
        <div class="detailContent">
            <div class="contentTitle">文章要求：</div>
            <div class="contentRequired">{{taskInformation.require}}</div>
            <div class="contentTitle">媒体分类：{{taskInformation.mediaCategory}}</div>
            <div class="contentTitle">行业分类：{{taskInformation.industryCategory}}</div>
            <div class="contentTitle">文章赏金：{{taskInformation.income}}元</div>
            <div class="contentTitle">截稿天数：{{taskInformation.pressNumber}}天</div>
        </div>
        <div class="buttonLineUser" v-if="status==1">
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
                recommendSubject:'情侣热恋期之后如何保持感情？',//文章标题
                publisher:'赵丽颖',//发布人
                Releaseday:'2021年1月31日',//发布时间
                require:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水',//文章要求
                mediaCategory:'知乎',//媒体分类
                industryCategory:'情感 营销',//行业分类
                income:'10',//文章赏金
                pressNumber:'3'//截稿天数
            },
            //用户身份判断，显示不同按钮：true为接单方 false为下单方
            status:false,
            taskId:''
        }
    },
    created(){
        this.taskId = this.$route.params.id ;
        this.status = localStorage.getItem('userIdentity')
        console.log(this.status)
        this.getTaskInfo()
    },
    methods:{
        //获取任务详情
        getTaskInfo(){
            console.log(this.taskId)
            let that = this
            this.axios({
                method: 'get',
                url: 'task/getTaskInfo',
                data:{
                    taskId: this.taskId,//传递过来的任务id
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.taskInformation=res.data.taskInformation
                }else{
                    // that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //跳转到用户信息
        gotoUserInfo(){
            console.log(this.taskInformation.userId)
            this.$router.push({name:'publishUserInfo',params: { userId: this.taskInformation.userId }})
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
    margin-bottom: 0.5rem;
}
.buttonLineUser{
    position:fixed;
    bottom: 1.5rem;
    width: 90%;
}
.van-button--large{
    height: 90px;
}
.van-button--info{
    background-color: #169bd5;
    border: 0.026667rem solid #169bd5;
}
.van-button{
    font-size: 0.4rem;
    border-radius: 10px;
}
.buttonLinePulisher{
    position:fixed;
    bottom: 1.5rem;
    width: 90%;
    .van-button{
        width: 45%;
        height: 90px;
    }
}
.buttonDelete{
    margin-left: 10%;
    background-color: #fff;
    color: #169bd5;
}
</style>