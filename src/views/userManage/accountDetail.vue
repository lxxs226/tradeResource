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
      <div v-if="noData" class="nodata">暂无账单记录</div>
      <div class="accountItem" v-for="(item,index) in accountLists" :key="index" v-else>
        <div class="accountDetailLeft">
          <div class="accountSubjectTitle">{{item.orderTitle}}</div>
          <div class="accountAllDetail">
            <div>{{item.orderEndday}}</div>
          </div>
        </div>
        <div class="accountRight">
          <div class="accountIncome">{{item.account}}元</div>
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
        monthValue:'',
        userName:'',
        accountLists:[{
          accountId:'', //账单id
          userId:'',  //用户id
          userName:'', //用户名s
          account:'', //金额
          orderId:'', //订单id
          orderTitle:'', //订单标题
          orderEndday:'', //订单完成时间
          accountTime:'' //账单产生时间
        }
      ],
      noData:false
    }
  },
  created(){
    this.userName = this.$route.params.userName;
    let date = new Date();
    this.monthValue = date.getFullYear() + '年' + (date.getMonth()+1) + '月'
    console.log(this.monthValue)
    this.getAccountList()
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
      this.getAccountList()
    },
    //获取帐单列表
    getAccountList(){
      console.log(this.monthValue)
      let month = this.monthValue.split(/年/)
      let monthData = month.join('-')
      monthData = monthData.substr(0, monthData.length - 1);  
      console.log(monthData) 
      let that = this
      this.axios({
          method: 'get',
          url: 'task/getAccountList',
          data:{
            userName: this.userName,//传递过来的文稿id
            monthData: monthData
          }
      }).then(function(res){
          console.log(res)
          if(res.data.success===true){
            if(res.data.accountLists.length==0){
              that.noData=true
            }else{
              console.log(res.data.accountLists)
              that.accountLists=res.data.accountLists
              that.noData=false
            }
          }else{
              // that.$toast.fail(res.data.msg);
          }
      }).catch(err=>{
          console.log(err)
      })
    },
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
.nodata{
  color:#909399;
  font-size: 0.3rem;
  line-height: 600px;
  text-align: center;
}
</style>