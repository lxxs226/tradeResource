<!--支出/收入明细-->
<template>
  <div class="accountDetail">
      <div class="dataSelect">
        <van-cell @click="show = true" :value="monthValue" is-link arrow-direction="down"/>
        <van-popup v-model="show" round position="bottom">
          <van-datetime-picker
              v-model="currentDate"
              type="year-month"
              title="选择年月"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirm"
              @cancel="show = false"
              :formatter="formatter"
              />
        </van-popup>
      </div>
      <div class="accountItem" v-for="(item,index) in accountLists" :key="index">
        <div class="accountDetailLeft">
          <div class="accountSubjectTitle">{{item.accountSubject}}</div>
          <div class="accountAllDetail">
            <div>{{item.completeDate}}</div>
          </div>
        </div>
        <div class="accountRight">
          <div class="accountIncome">{{item.income}}元</div>
        </div>
        
      </div>

  </div>
</template>

<script>
export default {
  name: 'accountDetail',
  data(){
    return{
        show: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        monthValue:'2021年2月',
        accountLists:[{
          accountSubject:'情侣热恋期之后如何保存感情？',
          completeDate:'2021年2月20日',
          income:10
        },{
          accountSubject:'情侣热恋期之后如何保存感情？',
          completeDate:'2021年2月20日',
          income:10
        },{
          accountSubject:'情侣热恋期之后如何保存感情？',
          completeDate:'2021年2月20日',
          income:10
        },{
          accountSubject:'情侣热恋期之后如何保存感情？',
          completeDate:'2021年2月20日',
          income:10
        }
      ]

         
    }
  },
  methods:{
    formatter(type, val) {
      if (type === 'year') {
          return `${val}年`;
      } else if (type === 'month') {
          return `${val}月`;
      }
      console.log(val);
      return val;
    },
    onConfirm(val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      this.monthValue = `${year}年${month}月`
      this.show=false
    }
  }
}
</script>
<style lang="scss" scoped>
.accountDetail{
  width: 100%;
}
.dataSelect{
  padding-left: 7%;
}
.van-cell{
  font-size: .35rem;
  line-height: .7rem;
}
.van-cell__title, .van-cell__value{
  flex: none;
}
.van-cell__right-icon{
  margin-top: 14px;
  margin-left: 4px;
}

.accountItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
  display: flex;
  align-items:  center ;
}
.accountSubjectTitle{
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 6%;
}
.accountAllDetail{
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 6%;
  padding-bottom: .25rem;
}
.accountDetailLeft{
  width: 67%;
}
.accountRight{
  width: 25%;
  text-align: right;
}
.accountIncome{
  font-size: .43rem;
  font-weight: bold;
  color: #ff0000;
}
</style>