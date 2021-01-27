const fs = require('fs');
const path = require('path');
const Mock = require('mockjs'); //mockjs导入依赖模块
const JSON5 = require('json5');

//监听http请求
module.exports = function(app){
    if(process.env.MOCK == 'true'){//通过设置环境变量来进行判断是否属用mock
    //拦截相应的地址返回特定的数据
    // app.get('/user/userinfo',function (rep,res){
    //     //每次响应请求时读取mock data的json文件
    //     //getJsonFile方法定义了如何读取json文件并解析成数据对象
    //     var json = getJsonFile('./userInfo.json5');
    //     //将json传入Mock.mock方法中，生成的数据返回给浏览器
    //     res.json(Mock.mock(json));
    // });    
    }
}