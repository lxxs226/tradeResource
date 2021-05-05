const Mock = require('mockjs'); //mockjs导入依赖模块

let MOCK=true;
//用户账户信息
var user=[]
//用户个人信息
var userInfo=[]
//任务列表
var recommendTask=[{
    taskId:1,//任务id
    userId:3,//用户id
    publisher:'王五',
    recommendSubject:'情侣热恋期之后如何保存感情？',//题目
    require:'字数大于300字，尽快完成。',//题目要求
    industryId:'2 0',//行业类别id
    industryCategory:'营销 情感',//行业类别
    mediaId:0,//媒体类别id
    mediaCategory:'知乎',//媒体类别
    pressNumber:5,//截至天数
    Releaseday:'2020-12-02',//发布日期
    income:10,//预计稿费
    status:0 //任务状态  0：已发布，1：已删除
},
{
    taskId:2,//任务id
    userId:1,//用户id
    publisher:'张三',
    recommendSubject:'宣传app',//题目
    require:'字数大于600字，尽快完成。',//题目要求
    industryId:'2 0',//行业类别id
    industryCategory:'营销 情感',//行业类别
    mediaId:1,//媒体类别id
    mediaCategory:'微博',//媒体类别
    pressNumber:2,//截至天数
    Releaseday:'2020-12-02',//发布日期
    income:190,//预计稿费
    status:0 //任务状态  0：已发布，1:已被接单 ，2：已删除
},
{
    taskId:3,//任务id
    userId:2,//用户id
    publisher:'李四',
    recommendSubject:'感人小故事',//题目
    require:'潸然泪下，沁人心脾',//题目要求
    industryId:'0',//行业类别id
    industryCategory:'情感',//行业类别
    mediaId:2,//媒体类别id
    mediaCategory:'豆瓣',//媒体类别
    pressNumber:6,//截至天数
    Releaseday:'2020-12-02',//发布日期
    income:100,//预计稿费
    status:1 //任务状态  0：已发布，1：已删除
},
{
    taskId:4,//任务id
    userId:1,//用户id
    publisher:'张三',
    recommendSubject:'科普法律知识',//题目
    require:'尽快完成。',//题目要求
    industryId:'2 0',//行业类别id
    industryCategory:'营销 情感',//行业类别
    mediaId:1,//媒体类别id
    mediaCategory:'微博',//媒体类别
    pressNumber:2,//截至天数
    Releaseday:'2020-12-02',//发布日期
    income:180,//预计稿费
    status:1 //任务状态  0：已发布，1:已被接单 ，2：已删除
},]
// columns1: ['0知乎', '1微博' , '2豆瓣', '3今日头条号','4懂车帝','5搜狐', '6网易', '7企鹅',
//          '8新浪看点', '9一点资讯', '10东方头条', '11太平洋号', '12趣头条', '13简书', '14其他','15媒体分类，即全部']
// columns2: ['0情感','1生活', '2营销' , '3资讯','4互联网','5财经', '6汽车', '7旅游', '8动漫', '9美食',
//          '10科技', '11美妆', '12时尚', '13房产', '14娱乐', '15搞笑', '16影视', '17健康', '18职场',
//           '19宠物', '20摄影', '21其他','22行业分类，即全部']
var publishUser=[
    {
        userId:1,//用户id
        name: "张三",
        age: "33",
        occupation: "经理",
        sex: "男",
        tel: "17899098765"
    },{
        userId:2,//用户id
        name: "李四",
        age: "45",
        occupation: "主编",
        sex: "女",
        tel: "13244908790"
    },{
        userId:3,//用户id
        name: "王五",
        age: "23",
        occupation: "助理",
        sex: "男",
        tel: "17688506700"
    }
]
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
    //首页--按照所选标签页获取对应类别的推荐任务
    Mock.mock('task/getRecommendTask',"get",function(options){
        console.log(JSON.parse(options.body).active)
        let res={}
        let recommendTaskByMediaId=[]
        recommendTask.forEach(element => {
            console.log(element)
            if(element.mediaId == (JSON.parse(options.body).active)){
                recommendTaskByMediaId.push(element)
            }
        });
        console.log(recommendTaskByMediaId)
        res={
            code:200,
            success:true,
            recommendLists:recommendTaskByMediaId
        };      
        return res
    })
    //任务详情--根据任务id查询详情
    Mock.mock('task/getTaskInfo',"get",function(options){
        console.log(JSON.parse(options.body).taskId)
        let res={}
        recommendTask.forEach(element => {
            console.log(element)
            if(element.taskId == (JSON.parse(options.body).taskId)){
                res={
                    code:200,
                    success:true,
                    taskInformation:element
                };  
            }
        });
        console.log(res)
        return res
    })
    //查询其他用户信息
    Mock.mock('user/getPublishUserInfo',"get",function(options){
        let res={}
        console.log(JSON.parse(options.body))
        publishUser.forEach(element => {
            console.log(element)
            if(element.userId == (JSON.parse(options.body).userId)){
                res={
                    code:200,
                    success:true,
                    userInfo:element
                };  
            }
        });
        return res
    })
    //任务大厅--按照条件，获取任务列表
    Mock.mock('task/getTask',"get",function(options){
        console.log(JSON.parse(options.body).mediaId)
        console.log(JSON.parse(options.body).industryId)
        let res={}
        let taskList=[]
        if(JSON.parse(options.body).mediaId==15 && JSON.parse(options.body).industryId!='22'){
            console.log('111')
            recommendTask.forEach(element => {
                console.log(element)
                if(element.industryId.indexOf(JSON.parse(options.body).industryId) != -1){
                    taskList.push(element)
                }
            });
        }else if(JSON.parse(options.body).mediaId!=15 && JSON.parse(options.body).industryId=='22'){
            recommendTask.forEach(element => {
                console.log(element)
                if(element.mediaId==JSON.parse(options.body).mediaId){
                    taskList.push(element)
                }
            });
        }else if(JSON.parse(options.body).mediaId==15 && JSON.parse(options.body).industryId=='22'){
            taskList=recommendTask
        }else{
            recommendTask.forEach(element => {
                console.log(element)
                if(element.mediaId==JSON.parse(options.body).mediaId && element.industryId.indexOf(JSON.parse(options.body).industryId) != -1){
                    taskList.push(element)
                }
            });
        }
        console.log(taskList)
        res={
            code:200,
            success:true,
            hallTaskLists:taskList
        };      
        return res
    })
    //任务大厅--按照搜索内容，获取任务列表
    Mock.mock('task/getTaskBySearch',"get",function(options){
        console.log(JSON.parse(options.body).searchTask)
        let res={}
        let taskList=[]
        recommendTask.forEach(element => {
            console.log(element)
            if(element.recommendSubject.indexOf(JSON.parse(options.body).searchTask) != -1){
                taskList.push(element)
            }
        });
        console.log(taskList)
        res={
            code:200,
            success:true,
            hallTaskLists:taskList
        };      
        return res
    })
    //任务管理（发布者）--按照用户id、任务状态，获取任务列表
    Mock.mock('task/getTaskByUser',"get",function(options){
        console.log(JSON.parse(options.body))
        let searchTask=JSON.parse(options.body).searchTask
        let res={}
        let taskList=[]
        if(searchTask.length != 0){
            console.log('111')
            recommendTask.forEach(element => {
                console.log(element)
                if(element.publisher==JSON.parse(options.body).userId&&element.status==JSON.parse(options.body).active&&element.recommendSubject.indexOf(JSON.parse(options.body).searchTask) != -1){
                    taskList.push(element)
                }
            });
        }else{
            console.log('222')
            recommendTask.forEach(element => {
                console.log(element)
                if(element.publisher==JSON.parse(options.body).userId&&element.status==JSON.parse(options.body).active){
                    taskList.push(element)
                }
            });
        }
        console.log(taskList)
        res={
            code:200,
            success:true,
            companyTaskLists:taskList
        };      
        return res
    })
}