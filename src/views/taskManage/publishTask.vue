<!--发布任务-->
<template>
  <div class="publishTask">
      <van-form @submit="onSubmit">
        <van-field
            v-model="title"
            name="文章主题"
            label="文章主题"
            placeholder="文章主题"
            :rules="[{ required: true, message: '请填写文章主题' }]"
        />
        <van-field
            v-model="requirement"
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
            :value="value1"
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
            :value="value2"
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

          <van-field v-model="number" type="number" label="文章赏金" placeholder="请输入金额，单位：元"/>
          <van-field v-model="digit"  type="digit"  label="截稿天数" placeholder="请输入天数，单位：天"/>
      

        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">发布任务</van-button>
        </div>
    </van-form>

  </div>
</template>

<script>
export default {
  name: 'publishTask',
  data(){
    return{
        title: '',
        requirement: '',
        value1: '',
        showPicker1: false,
        columns1: ['知乎', '微博', '今日头条号' , '豆瓣','懂车帝','搜狐号', '网易号', '企鹅号', '新浪看点', '一点资讯', '东方头条', '太平洋号', '趣头条', '简书', '其他'],
        value2: '',
        showPicker2: false,
        columns2: ['情感','生活', '营销' , '资讯','互联网','财经', '汽车', '旅游', '动漫', '美食', '科技', '美妆', '时尚', '房产', '娱乐', '搞笑', '影视', '健康', '职场', '宠物', '摄影', '其他'],
        number: '',
        digit: '',
    }
  },
  methods:{
      onSubmit(values) {
      console.log('submit', values);
      },

      onConfirm1(value1) {
      this.value1 = value1;
      this.showPicker1 = false;
    },

    onConfirm2(value2) {
      this.value2 = value2;
      this.showPicker2 = false;
    },
    
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

</style>