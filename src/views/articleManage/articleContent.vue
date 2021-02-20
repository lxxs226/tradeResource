<template>
    <div class="artcleContent">
        <div id="div1"></div>
        <div v-html="aa"></div>
        <button type="button" @click="submit">提交</button>
    </div>
    

</template>
<script>
import E from 'wangeditor'
export default {
    data(){
        return{
            aa:''
        }
    },
     mounted(){
        this.$nextTick(v=>{
            let that = this

            //显示在div内
            const editor = new E('#div1')
            //输入框高度
            editor.config.height=300
            //editor.config.width=300 这样直接设置宽度没有效果，宽度需要给div外套一个div，给他的父级设置宽度

            editor.config.onchange = function (html){//第二步，监控变化，获取到实时输入内容对应的html，同步更新到textarea
                that.aa=html
            }
            //不检测变化，获取最终html：editor.txt.html()
            //由于获取到的html不包括css部分，所以反显的时候类似表格，或者代码高亮无法显示，需要在css部分手动添加样式
            editor.create()

        })
    },
    methods:{
        submit(){
            console.log(this.aa)
        }
    }

}
</script>
<style scoped>
.artcleContent{
    width: 90%;
}
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}


/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}
</style>