<!--支出/收入明细-->
<template>
  <div class="accountDetail">
      <div class="dataSelect">

        <van-cell  @click="showPopup" value="2021年2月" icon="arrow-down"/>
        <van-popup v-model="show" round position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="year-month"
                title="选择年月"
                :min-date="minDate"
                :max-date="maxDate"
                :formatter="formatter"
                />
        </van-popup>
      </div>

      <div class="accountItem" v-for="(item,index) in accountLists" :key="index">
            <div class="accountSubjectTitle">{{item.accountSubject}}</div>
            <div class="accountAllDetail">
              <div class="accountDetailLeft">
                <div>{{item.completeDate}}</div>
              </div>
              <div class="accountDetailRight">
                <div class="accountIncome">{{item.income}}元</div>
              </div>
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
      showPopup() {
      this.show = true;
      },

      formatter(type, val) {
        if (type === 'year') {
            return `${val}年`;
        } else if (type === 'month') {
            return `${val}月`;
        }
        return val;
      },
    
  }
}
</script>
<style lang="scss" scoped>
.accountDetail{
  width: 100%;;
}

.van-cell{
  font-size: .35rem;
  line-height: .5rem;
}

.accountItem{
  border-bottom: .001rem solid  #c2c0c0;
  width: 100%;
  margin-top: 0.1rem;
}
.accountSubjectTitle{
  flex-direction: column;
  line-height: 1rem;
  font-size: 0.4rem;
  margin-left: 2%;
}
.accountAllDetail{
  display: flex;
  line-height: 0.7rem;
  font-size: 0.35rem;
  color: #808080;
  margin-left: 2%;
  padding-bottom: .25rem;
}
.accountDetailLeft{
  width: 67%;
}

.accountIncome{
  font-size: .43rem;
  font-weight: bold;
  color: #e62222;
}



</style>