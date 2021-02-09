<!--编辑资料-->
<template>
  <div class="userEdit">
    <div class="editForm">
      <van-cell-group>
        <van-field v-model="name" label="昵称" />
        <van-field v-model="sex"  label="性别" />
        <van-field v-model="age" type="digit" label="年龄" />
        <van-field v-model="occupation"  label="职业" />
        <van-field v-model="tel" type="tel" label="联系方式" />
      </van-cell-group>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'userEdit',
  data(){
    return{
      name: '赵丽颖',
      sex: '女',
      age: '20',
      occupation: '经理',
      tel: '13312312123',

    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.userEdit{
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #f7f8fa;
}

.van-cell{
  font-size: 0.35rem;
  line-height: 0.6rem;
}

/deep/.van-field__control{
  text-align: right;
  margin-right: .3rem;
  color: rgb(39, 27, 212);
}
</style>