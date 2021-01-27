<template>
  <div class="home">
    <div class="homeSwipe">
      <van-swipe :autoplay="3000" indicator-color="white" class="homeSwipeContert">
        <van-swipe-item>
          <img src="../assets/pic/homepic1.png" class="swipePic"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/pic/homepic2.png" class="swipePic"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/pic/homepic3.png" class="swipePic"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.homeSwipe{
  width: 96%;
  margin-left: 2%;
  height: 5rem;
}
.homeSwipeContert{
  border-radius: 0.25rem;
}
.swipePic{
  width: 100%;
  height: 5rem;
}
</style>
