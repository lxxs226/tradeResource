const Mock = require('mockjs'); //mockjs导入依赖模块

let MOCK=true;
//用户账户信息
var user=[]
//用户个人信息
var userInfo=[]
if(MOCK==true){
    // Mock.mock(RegExp('user/register' + ".*"),"post",function(options){ //regEXP随机匹配，当axios采用params带参的时候，会将参数带在请求路径上，造成mock拦截不到
    //用户注册
    Mock.mock('user/register',"post",function(options){//当使用data传递参数的时候，mock会将参数放进options的body中
        console.log(options)
        user.push(JSON.parse(options.body))
        console.log(user)
        let res={
            code:200,
            success:true,
            msg:'注册成功，请进行登录',
        };
        return res
    })
    //用户登录
    Mock.mock('user/login',"post",function(options){
        let res={}
        for (let index = 0; index < user.length; index++) {
            if(JSON.parse(options.body).username==user[index].username){
                if(JSON.parse(options.body).password==user[index].password){
                    res={
                        code:200,
                        success:true,
                        msg:'登陆成功',
                        userId: Mock.mock('@id'),
                        userIdentity:user[index].Identity
                    }
                }else{
                console.log('555')
                    res={
                        code:200,
                        success:false,
                        msg:'密码不正确'
                    }
                }
            }else{
                res={
                    code:200,
                    success:false,
                    msg:'用户不存在，请先注册'
                }
            }
        }
        return res
    })
    //用户添加/修改个人信息
    Mock.mock('user/changeUserInfo',"post",function(options){
        userInfo.push(JSON.parse(options.body))
        console.log(userInfo)
        let res={
            code:200,
            success:true,
            msg:'已保存',
        };
        return res
    })
    //查询用户的个人信息
    Mock.mock('user/getUserInfo',"get",function(options){
        let res={}
        console.log(JSON.parse(options.body).name)
        if(userInfo.length>0){
            for (let index = 0; index < userInfo.length; index++) {
                console.log('1111')
                if(JSON.parse(options.body).name==userInfo[index].username){
                    console.log('222')
                    res={
                        code:200,
                        success:true,
                        userInfo:userInfo[index]
                    };
                }else{
                    res={
                        code:200,
                        success:false,
                        msg:'暂无信息'
                    };
                }
            }
        }else{
            res={
                code:200,
                success:false,
                msg:'暂无信息'
            };
        }
       
        return res
    })
}