<!--文稿编辑页面-->
<template>
    <div class="articleContent">
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
            <div class="detailpublish" v-if="draftInformation.status!=0">
                <div>
                    交稿人：<span style="color:#83cfff;">{{finishArticle.writer}}</span>
                </div>
                <div>
                    交稿日期：{{finishArticle.finishDate}}
                </div>
            </div>
        </div>
        <div id="editordiv"></div>
        <!-- <div v-html="content"></div> -->
        <!-- <button type="button" @click="submit">提交</button> -->
        <!--接单者待编辑-->
        <div class="buttonLinePulisher" v-if="draftInformation.status==0">
            <van-button type="info" size="normal" class="buttonDelete">保存</van-button>
            <van-button type="info" size="normal" @click="showPublish=true">提交</van-button>
        </div>
        <!--接单者待修改-->
        <div class="buttonLineUpdate" v-else>
            <van-button type="info" size="normal" class="buttonDelete" @click="showAdvice=true">修改意见</van-button>
            <van-button type="info" size="normal" class="buttonDelete">保存</van-button>
            <van-button type="info" size="normal">提交</van-button>
        </div>
        <van-dialog v-model="showAdvice" title="修改意见" class="adviceDialog" close-on-click-overlay>
            <div class="advicediv">
                <div>发出修改日期：{{updateAdvice.adviceDate}}</div>
                <div>修改截至日期：{{updateAdvice.finishUpdateDate}}</div>
                <div class="adviceContent">修改建议：{{updateAdvice.advice}}</div>
            </div>
        </van-dialog>
        <van-dialog v-model="showPublish" title="确定提交" class="adviceDialog" show-cancel-button @confirm="publishDraft">
            <div class="dialogText">是否确定提交当前文稿？</div>
        </van-dialog>
    </div>
    

</template>
<script>
import E from 'wangeditor'
export default {
    data(){
        return{
            content:'',
            taskInformation:{
                recommendSubject:'情侣热恋期之后如何保持感情？',//文章标题
                Releaseday:'2021年1月31日',//发布时间
                publisher:'赵丽颖',//发布人
                require:'通过这个问题撒旦撒旦撒范德萨范德萨水水水水水水水水等级为呃呃呃呃呃呃呃呃呃呃呃呃呃呃的就是水水水水水水水水水水水水水水水水。',//文章要求
            },
            draftInformation:{
                draftId:'',  //文稿id
                orderId:'',  //订单id 
                contect:'', //内容
                status:0,  // 文稿状态 0：待提交 1：已提交，待回复 2：未通过，待修改 3：已通过
                draftDate:'',  //文稿提交时间
                passedDate:'',  //文稿通过时间
                adviceid:'', //意见id
            },
            //修改意见对话框
            showAdvice:false,
            //确认提交文稿
            showPublish:false,
            updateAdvice:{
                adviceDate:'2021年1月17日',
                finishUpdateDate:'2021年1月20日',
                advice:'我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议我是建议'
            },
            //交稿信息
            finishArticle:{
                writer:'吴亦凡',
                finishDate:'2021年1月13日'
            },
            //editFlag:'2',
            taskId:'',
            //用户身份
            status:'',
            draftId:''
        }
    },
    created(){
        this.taskId = this.$route.params.taskId
        this.draftId = this.$route.params.draftId
        this.status = localStorage.getItem('userIdentity')
        this.getTaskInfo()
        this.getDraftInfo()
    },
    mounted(){
        this.$nextTick(v=>{
            let that = this
            //一、显示在div内
            const editor = new E('#editordiv')
            //二、输入框高度，宽度
            editor.config.height=320
            //editor.config.width=300 这样直接设置宽度没有效果，宽度需要给div外套一个div，给他的父级设置宽度

            //三、配置菜单的两种方式
            //1直接配置所有需要的
            editor.config.menus = ['head','bold','fontSize','fontName','foreColor','lineHeight','italic','underline',
                    'link','list','justify','emoticon','image','table','undo','redo']
            //2不需要的较少时，单独配置不需要的
            //editor.config.excludeMenus =['strikeThrough','indent','backColor','todo','quote','video','code','splitLine']

            //四、可以配置编辑器的文字颜色的可选项，字体，字号，表情.....的可选项，配置代码高亮见官网
            // editor.config.colors = ['#08888e','#eeecee','#1c487f','#4d80bf']
            // editor.config.fontNames = ['黑体','仿宋']

            //五、配置上传图片，可以添加本地上传图片的方式，需要添加服务器
            //editor.config.uploadImgServer = '/upload-img' //upload-img 的位置适用于配置后端用于将本地图片转换为网络地址的接口名
            //editor.config.uploadImgMaxSize = 2 * 1024 * 1024 //限制图片大小2M
            //editor.config. uploadImgAccept = [ 'jpg','jpeg','png','gif','bmp'] //限制图片类型
            editor.config.uploadImgMaxLength = 10 //一次最多上传10个图片
            //还可以进行图片加密base64，与服务器方法不可同时使用
            editor.config.uploadImgShowBase64 = true//加密之后不需要过服务器也可以本地上传，有浏览器进行加密解密

            // 六、配置全屏功能按钮是否展示
            editor.config.showFullScreen = false
            // editor.customConfig.zIndex = 5
            // 七、监听内容变化，获取html代码
            editor.config.onchange = function (html){//第二步，监控变化，获取到实时输入内容对应的html，同步更新到textarea
                that.content=html
            } 
            //八、获取输入内容
            //不检测变化，获取最终html：editor.txt.html()
            //获取最终text内容：editor.txt.text()，只是输入内容没有标签
            //由于获取到的html不包括css部分，所以反显的时候类似表格，或者代码高亮无法显示，需要在css部分手动添加样式
            editor.create()
            //使用editor.txt.html，可以讲之前插入的内容反显到编辑器里，用于修改
            // if(this.editFlag === '1'){
            //         editor.txt.html(this.content);
            // }
        })
    },
    methods:{
        submit(){
            console.log(this.content)
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
        //提交文稿
        publishDraft(){
            let that = this
            this.draftInformation.contect=this.content
            this.draftInformation.status=1
            this.draftInformation.draftDate=this.getToday()
            console.log(this.draftInformation)
            this.axios({
                method: 'post',
                url: 'task/publishDraft',
                data:{
                    draftInformation: this.draftInformation,
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
        //获取今天日期
        getToday(){
            let today = new Date();
            today.setTime(today.getTime());
            let day = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
            return day
        }
    }
}
</script>
<style lang="scss" scoped>
.articleContent{
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
.van-button--large{
    height: 90px;
}
.van-button--info{
    background-color: #169bd5;
    border: 0.026667rem solid #169bd5;
}
.van-button{
    height: 85px;
    font-size: 0.38rem;
    border-radius: 10px;
}
.buttonLinePulisher{
    position:fixed;
    bottom: 1.2rem;
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
.dialogText{
    font-size: 0.35rem;
    line-height: 2rem;
    text-align: center;
}
</style>