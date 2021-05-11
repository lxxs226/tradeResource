<!--发布任务-->
<template>
  <div class="publishTask">
    <van-form @submit="onSubmit">
      <van-field
          v-model="publishTask.recommendSubject"
          label="文章主题"
          placeholder="文章主题"
          :rules="[{ required: true, message: '请填写文章主题' }]"
      />
      <van-field
        v-model="publishTask.require"
        rows="2"
        autosize
        label="文章要求"
        type="textarea"
        maxlength="100"
        placeholder="请输入要求，包括文章要求字数，文章主要叙述方向"
        show-word-limit
      />
      <van-field
        readonly
        clickable
        label="媒体分类"
        :value="publishTask.mediaCategory"
        placeholder="选择媒体"
        @click="showPicker1 = true"
      />
      <van-popup v-model="showPicker1" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns1"
          @cancel="showPicker1 = false"
          @confirm="onConfirm1"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        label="行业分类"
        :value="publishTask.industryCategory"
        placeholder="选择行业"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns2"
          @cancel="showPicker2 = false"
          @confirm="onConfirm2"
        />
      </van-popup>
      <van-field v-model="publishTask.income" type="number" label="文章赏金" placeholder="请输入金额，单位：元"/>
      <van-field v-model="publishTask.pressNumber" type="digit"  label="截稿天数" placeholder="请输入天数，单位：天"/>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" v-if="typeof(this.$route.params.taskId) == 'undefined'">确认发布</van-button>
        <van-button round block type="info" native-type="submit" v-else>确认修改</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
export default {
  name: 'publishTask',
  data(){
    return{
      publishTask:{
        // taskId:1,//任务id
        userId:localStorage.getItem('userId'),//用户id
        publisher:localStorage.getItem('userName'),//用户名
        recommendSubject:'',//题目
        require:'',//题目要求
        industryId:'',//行业类别id
        industryCategory:'',//行业类别
        mediaId:'',//媒体类别id
        mediaCategory:'',//媒体类别
        pressNumber:'',//截至天数
        Releaseday:'',//发布日期
        income:'',//预计稿费
        status:0 //任务状态  0：已发布，1：已删除
      },
      showPicker1: false,
      columns1: ['知乎', '微博','豆瓣', '今日头条号', '懂车帝','搜狐', '网易', '企鹅s', '新浪看点', '一点资讯', '东方头条', '太平洋号', '趣头条', '简书', '其他'],
      value2: '',
      showPicker2: false,
      columns2: ['情感','生活', '营销' , '资讯','互联网','财经', '汽车', '旅游', '动漫', '美食', '科技', '美妆', '时尚', '房产', '娱乐', '搞笑', '影视', '健康', '职场', '宠物', '摄影', '其他'],
      taskId:''
    }
  },
  created(){
    //获取今天的时间
    let today = new Date();
    today.setTime(today.getTime());
    let day = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();
    this.publishTask.Releaseday=day
    //编辑页面传递的id
    if(typeof(this.$route.params.taskId) == 'undefined')return true
    else{
      this.taskId = this.$route.params.taskId
      console.log('111')
      this.getTaskById()
    }
  },
  methods:{
    onSubmit() {
      this.publishTask.industryId=this.columns2.indexOf(this.publishTask.industryCategory)
      this.publishTask.mediaId=this.columns1.indexOf(this.publishTask.mediaCategory)
      console.log(this.publishTask);
      let that = this
      this.axios({
          method: 'post',
          url: 'task/publishTask',
          data:{
            publishTask: this.publishTask,
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
    onConfirm1(mediaCategory) {
      console.log(mediaCategory)
      this.publishTask.mediaCategory = mediaCategory;
      this.showPicker1 = false;
    },
    onConfirm2(industryCategory) {
      this.publishTask.industryCategory = industryCategory;
      this.showPicker2 = false;
    },
    getTaskById(){
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
            console.log(res.data.taskInformation)
            that.publishTask=res.data.taskInformation
          }else{
              // that.$toast.fail(res.data.msg);
          }
      }).catch(err=>{
          console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.publishTask{
  width: 100%;
}
.van-cell{
  font-size: .35rem;
  line-height: 1rem;
}
.van-button--normal{
  font-size: .35rem;
}
.van-button{
  height: 1rem;
}
/deep/.van-picker__cancel{
  font-size: 0.3rem;
}
/deep/.van-picker__confirm{
  font-size: 0.3rem;
}
/deep/.van-picker-column{
  font-size: 0.38rem;
}
</style>