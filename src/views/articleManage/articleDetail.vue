<template>
    <div class="articleDetail">
        <div class="detailTop">
            <div class="detailTitle">
                {{taskInformation.recommendSubject}}
            </div>
            <div class="detailpublish">
                <div>
                    发布人：<span style="color:#83cfff;">{{taskInformation.publisher}}</span>
                </div>
                <div>
                    发布任务日期：{{taskInformation.Releaseday}}
                </div>
            </div>
            <div class="contentRequired">任务要求：{{taskInformation.require}}</div>
            <div class="detailpublish">
                <div>
                    交稿人：<span style="color:#83cfff;">{{writerName}}</span>
                </div>
                <div>
                    交稿日期：{{draftInformation.draftDate}}
                </div>
            </div>
        </div>
        <div class="detailContent">
            <div class="detailContentTitle">文稿内容:</div>
            <div class="detailContentDetail" v-html="draftInformation.contect"></div>
        </div>
        <div class="detailpublish" v-if="draftInformation.status==3">
            <div>
                审核人：<span style="color:#83cfff;">{{taskInformation.publisher}}</span>
            </div>
            <div>
                合格日期：{{draftInformation.passedDate}}
            </div>
        </div>
        <!--发布者首次待审核-->
        <div class="buttonLinePulisher" v-if="status==2 && draftInformation.status==1 && adviceList.length==0">
            <van-button type="info" size="normal" class="buttonDelete" @click="createAdvive=true">发起修改</van-button>
            <van-button type="info" size="normal" @click="passedArticle">文章合格</van-button>
        </div>
        <!--接单者经过修改后再次待审核-->
        <div class="buttonLineUpdate" v-if="status==2 && draftInformation.status==1 && adviceList.length!=0">
            <van-button type="info" size="normal" class="buttonDelete" @click="showOldAdvice=true">修改意见</van-button>
            <van-button type="info" size="normal" class="buttonDelete" @click="createAdvive=true">发起修改</van-button>
            <van-button type="info" size="normal" @click="passedArticle">文章合格</van-button>
        </div>
        <!--查看历史修改意见-->
        <van-dialog v-model="showOldAdvice" title="历史修改意见" class="adviceDialog" close-on-click-overlay>
            <div v-for="(item,index) in adviceList" :key="index" class="advicebox">
                <div class="advicediv">
                    <div>发出修改日期：{{item.adviceDate}}</div>
                    <div>修改截止日期：{{item.adviceChangedate}}</div>
                    <div class="adviceContent">修改建议：{{item.adviceContent}}</div>
                </div>
            </div>
        </van-dialog>
        <!--发布修改意见-->
        <van-dialog v-model="createAdvive" title="修改意见" class="adviceDialog" close-on-click-overlay showCancelButton @confirm="addAdvice">
            <van-field v-model="advice.adviceChangedateNum" placeholder="请输入修改截止天数（单位：天）" type="number" />
            <van-field
                v-model="advice.adviceContent"
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
                recommendSubject:'情侣热恋期之后如何保持感情？',//文章标题
                Releaseday:'2021年1月31日',//发布时间
                publisher:'赵丽颖',//发布人
                require:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水。',//文章要求
            },
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
            draftInformation:{
                draftId:'',  //文稿id
                orderId:'',  //订单id 
                contect:'', //内容
                status:'',  // 文稿状态 0：待提交 1：已提交，待回复 2：未通过，待修改 3：已通过
                draftDate:'',  //文稿提交时间
                passedDate:'',  //文稿通过时间
                adviceid:'', //意见id
            },
            //交稿信息
            writerName:'',
            //articleContent:'我是文',
            //之前的修改意见
            // updateAdvice:{
            //     adviceDate:'2021年1月17日',
            //     finishUpdateDate:'2021年1月20日',
            //     advice:'我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议'
            // },
            adviceList:[{
                adviceId:'', //修改建议id
                draftId:'',//对应文稿id
                adviceContent:'',  //意见内容
                adviceDate:'',  //意见提交时间
                adviceChangedate:'', //修改截至日期
                adviceChangedateNum:''  //修改截至时间天数
            }],
            //之前发布的意见对话框
            showOldAdvice:false,
            //新建意见对话框
            createAdvive:false,
            //新的意见
            adviceMessage:'',
            taskId:'',
            orderId:'',
            //用户身份
            status:'',
            draftId:'',
            account:{
                accountId:'', //账单id
                // userId:localStorage.getItem('userId'),  //用户id
                // userName:localStorage.getItem('userName'), //用户名
                userId:'',  //用户id
                userName:'', //用户名s
                account:'', //金额
                orderId:'', //订单id
                orderTitle:'', //订单标题
                orderEndday:'', //订单完成时间
                accountTime:'' //账单产生时间
            },
            advice:{
                adviceId:'', //修改建议id
                draftId:'',//对应文稿id
                adviceContent:'',  //意见内容
                adviceDate:'',  //意见提交时间
                adviceChangedate:'', //修改截至日期
                adviceChangedateNum:''  //修改截至时间天数
            }

        }
    },
    created(){
        this.taskId = this.$route.params.taskId
        this.orderId = this.$route.params.orderId
        this.draftId = this.$route.params.draftId
        this.writerName = this.$route.params.writerName
        console.log(this.writerName)
        this.status = localStorage.getItem('userIdentity')
        console.log(this.status)
        this.getTaskInfo()
        this.getDraftInfo()
        this.getOrderInfo()
        this.showAdviceContent()
    },
    methods:{
        //获取修改意见
        showAdviceContent(){
            let that = this
            this.axios({
                method: 'get',
                url: 'task/showAdviceContent',
                data:{
                    draftId: this.draftId//文稿id
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.adviceList=res.data.adviceList
                    that.showAdvice=true
                }else{
                    // that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
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
        //获取任务详情
        getOrderInfo(){
            console.log(this.orderId)
            let that = this
            this.axios({
                method: 'get',
                url: 'task/getOrderInfo',
                data:{
                    orderId: this.orderId,//传递过来的任务id
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.order=res.data.order
                }else{
                    // that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //获取文稿详情
        getDraftInfo(){
            console.log(this.draftId)
            let that = this
            this.axios({
                method: 'get',
                url: 'task/getDraftInfo',
                data:{
                    draftId: this.draftId,//传递过来的文稿id
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.draftInformation=res.data.draftInformation
                }else{
                    // that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //文章合格通过
        passedArticle(){
            let that = this
            this.order.status=1
            this.order.endday=this.getToday()
            this.order.isOverDue=this.getIsOverDue(this.order.endday,this.order.projectendday)
            this.order.endmoney=this.taskInformation.income
            console.log(this.order)
            this.draftInformation.status=3
            this.draftInformation.passedDate=this.getToday()
            console.log(this.draftInformation)

            this.axios({
                method: 'post',
                url: 'task/passArticle',
                data:{
                    order: this.order,
                    draft: this.draftInformation
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    let publisherIncome='-'+that.taskInformation.income
                    let writerIncome='+'+that.taskInformation.income
                    that.addAccount(that.taskInformation.userId,that.taskInformation.publisher,publisherIncome) //插入商家账单
                    that.addAccount(that.order.userId,that.order.userName,writerIncome) //插入供方账单
                }else{
                    that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        //添加账单
        addAccount(id,name,income){
            this.account.userId=id  //用户id
            this.account.userName=name //用户名
            this.account.account=income //金额
            this.account.orderId=this.taskInformation.taskId //订单id
            this.account.orderTitle=this.taskInformation.recommendSubject //订单名
            this.account.orderEndday=this.order.endday//完成日期
            this.account.accountTime=this.getToday() //金额产生时间
            let that = this
            this.axios({
                method: 'post',
                url: 'task/addAccount',
                data:{
                    account: this.account
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.$toast.success({
                        message: res.data.msg,
                        duration : 500
                    });
                    // location.reload()//页面重新加载
                    //that.$router.push({name:'articleContent',params: { taskId: that.taskId,orderId: that.order.orderId,draftId :that.draft.draftId,writerName:that.writerName }});
                }else{
                    that.$toast.fail(res.data.msg);
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getToday(){
            //获取今天的时间
            let today = new Date();
            today.setTime(today.getTime());
            let day = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
            return day
        },
        //判断是否过期
        getIsOverDue(date1,date2){
            let oDate1 = new Date(date1);//实际完成时间
            let oDate2 = new Date(date2);//应当完成时间
            if(oDate1.getTime() > oDate2.getTime()){
                console.log('第一个大');
                return 1
            } else {
                return 0
            }
        },
        //添加建议
        addAdvice(){
            this.advice.adviceDate=this.getToday()//提出建议时间
            this.advice.draftId=this.draftInformation.draftId //相应任务id
            this.advice.adviceChangedate=this.getNewData(this.advice.adviceDate,this.advice.adviceChangedateNum) //修改截止日期
            let that = this
            this.axios({
                method: 'post',
                url: 'task/addAdvice',
                data:{
                    advice: this.advice
                }
            }).then(function(res){
                console.log(res)
                if(res.data.success===true){
                    that.$toast.success({
                        message: res.data.msg,
                        duration : 500
                    });
                    that.getDraftInfo()

                    // location.reload()//页面重新加载
                    //that.$router.push({name:'articleContent',params: { taskId: that.taskId,orderId: that.order.orderId,draftId :that.draft.draftId,writerName:that.writerName }});
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
/deep/.van-field__control{
    font-size: 0.35rem;
}
</style>