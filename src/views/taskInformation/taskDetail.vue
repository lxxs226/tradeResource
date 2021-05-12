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
        <div v-if="taskInformation.status==0">
            <div class="buttonLineUser" v-if="status==1">
                <van-button type="info" size="large" @click="showAccept=true">接受任务</van-button>
            </div>
            <div class="buttonLinePulisher" v-else>
                <van-button type="info" size="normal" @click="gotoChange">编辑</van-button>
                <van-button type="info" size="normal" class="buttonDelete" @click="showDelete=true">删除</van-button>
            </div>
        </div>
        <div class="buttonLineUser" v-else>
            <van-button type="info" size="large" disabled>此任务已被接单</van-button>
        </div>
        <van-dialog v-model="showDelete" title="确定删除" class="adviceDialog" show-cancel-button @confirm="deleteTask">
            <div class="dialogText">是否确定删除此任务？</div>
        </van-dialog>
        <van-dialog v-model="showAccept" title="确定接单" class="adviceDialog" show-cancel-button @confirm="acceptTask">
            <div class="dialogText">是否确定接受此任务？</div>
        </van-dialog>
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
            taskId:'',
            showDelete:false,
            showAccept:false,
            userId:localStorage.getItem('userId'),
            writerName:localStorage.getItem('userName'),
            order:{
                orderId:'',
                taskId:'' , //对应任务id
                userId:'',  //接单人id
                userName:'',//接单人姓名
                status:0,  //订单状态 0：已开始  1：已完成
                reateday:'',//当前日期  接单日期
                endday:'',  //实际完成日期
                projectendday:'', //应当结束日期
                isOverDue:0,   //是否过期  0：未过期 1：已过期
                endmoney:'' //实际稿费
            },
            draft:{
                draftId:'',  //文稿id
                orderId:'',  //订单id 
                contect:'', //内容
                status:0,  // 文稿状态 0：待提交 1：已提交，待回复 2：未通过，待修改 3：已通过
                draftDate:'',  //文稿提交时间
                passedDate:'',  //文稿通过时间
                adviceid:'', //意见id
            }
        }
    },
    created(){
        this.taskId = this.$route.params.id
        this.status = localStorage.getItem('userIdentity')
        console.log(this.status)
        this.getTaskInfo()
        //获取今天的时间
        let today = new Date();
        today.setTime(today.getTime());
        let day = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
        this.order.reateday=day
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
        },
        //需方跳转到编辑任务
        gotoChange(){
            console.log(this.taskId)
            this.$router.push({name:'publishTask',params: { taskId: this.taskId }})
        },
        //需方删除任务
        deleteTask(){
            let that = this
            this.axios({
                method: 'post',
                url: 'task/deleteTask',
                data:{
                    taskId: this.taskId,
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.$toast.success({
                        message: res.data.msg,
                        duration : 500
                    });
                    that.$router.push('/companyTaskManage');
                }else{
                    that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //供方接受任务
        acceptTask(){
            this.order.taskId=this.taskId
            this.order.userId=this.userId
            this.order.userName=this.writerName
            console.log(this.taskInformation.Releaseday)
            console.log(parseInt(this.taskInformation.pressNumber))
            this.order.projectendday=this.getNewData(this.taskInformation.Releaseday,parseInt(this.taskInformation.pressNumber))
            console.log(this.order)
            //修改任务状态,添加订单记录
            let that = this
            this.axios({
                method: 'post',
                url: 'task/acceptTask',
                data:{
                    taskId: this.taskId,//传递过来的任务id
                    order: this.order
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.order.orderId=res.data.orderId
                    that.draft.orderId=res.data.orderId
                    that.addDraft()
                    // that.$toast.success({
                    //     message: res.data.msg,
                    //     duration : 500
                    // });
                    // that.$router.push({name:'articleContent',params: { taskId: that.taskId }});
                }else{
                    that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //获取加天数后的日期
        getNewData(dateTemp, days) {  
            var dateTemp = dateTemp.split("-");  
            var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式    
            var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);  
            var rDate = new Date(millSeconds);  
            var year = rDate.getFullYear();  
            var month = rDate.getMonth() + 1;  
            if (month < 10) month = "0" + month;  
            var date = rDate.getDate();  
            if (date < 10) date = "0" + date;  
            return (year + "-" + month + "-" + date);  
        },
        //添加文稿项
        addDraft(){
            let that = this
            this.axios({
                method: 'post',
                url: 'task/addDraft',
                data:{
                    draft: this.draft
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.draft.draftId=res.data.draftId
                    that.$toast.success({
                        message: res.data.msg,
                        duration : 500
                    });
                    console.log(that.order.orderId)
                    that.$router.push({name:'articleContent',params: { taskId: that.taskId,orderId: that.order.orderId,draftId :that.draft.draftId,writerName:that.writerName }});
                }else{
                    that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
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
.adviceDialog{
    width: 70%;
    padding:0.4rem 0.5rem 0.4rem 0.5rem;
    z-index: 5;
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
.dialogText{
    font-size: 0.35rem;
    line-height: 2rem;
    text-align: center;
}
</style>