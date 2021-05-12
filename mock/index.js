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
    Releaseday:'2020-12-29',//发布日期
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
    status:0 //任务状态 0：已发布，1:已被接单 ，2：已删除
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
    status:0 //任务状态  0：已发布，1:已被接单 ，2：已删除
},]
// columns1: ['0知乎', '1微博' , '2豆瓣', '3今日头条号','4懂车帝','5搜狐', '6网易', '7企鹅',
//          '8新浪看点', '9一点资讯', '10东方头条', '11太平洋号', '12趣头条', '13简书', '14其他','15媒体分类，即全部']
// columns2: ['0情感','1生活', '2营销' , '3资讯','4互联网','5财经', '6汽车', '7旅游', '8动漫', '9美食',
//          '10科技', '11美妆', '12时尚', '13房产', '14娱乐', '15搞笑', '16影视', '17健康', '18职场',
//           '19宠物', '20摄影', '21其他','22行业分类，即全部']

//用户列表
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
//订单列表

    // orderId:'自增' //订单id
    // taskId:''  //对应任务id
    // userId:''  //接单人id
    // statu:0  //订单状态 0：已开始  1：已完成
    // reateday:''//当前日期  接单日期
    // Endday:''  //实际完成日期
    // Projectendday:'' //应当结束日期
    // IsOverDue:0   //是否过期  0：未过期 1：已过期
    // Endmoney:'' //实际稿费
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
    //发布任务
    Mock.mock('task/publishTask',"post",function(options){
        let publishTask=JSON.parse(options.body).publishTask
        let flag=false
        let res={}
        recommendTask.forEach(element => {
            if(element.taskId==publishTask.taskId){
                flag=true
                return flag
            }
        });
        console.log(flag)
        if(flag==true){
            console.log('111')
            recommendTask[publishTask.taskId-1]=publishTask
            res={
                code:200,
                success:true,
                msg:'修改成功！',
            };
        }else{
            publishTask['taskId']=recommendTask.length+1
            console.log(publishTask.taskId)
            recommendTask.push(publishTask)
            console.log(recommendTask)
            res={
                code:200,
                success:true,
                msg:'发布成功！',
            };
        }
        return res
    })
    //删除任务
    Mock.mock('task/deleteTask',"post",function(options){
        let taskId=JSON.parse(options.body).taskId
        console.log(taskId)
        let res={}
        try {
            // 执行到第3次，结束循环
            recommendTask.forEach(element => {
                if(element.taskId==taskId){
                    console.log('2222')
                    recommendTask.splice((taskId-1),1)
                    res={
                        code:200,
                        success:true,
                        msg:'删除成功！',
                    };
                    throw new Error("End");
                }else{
                    res={
                        code:200,
                        success:false,
                        msg:'删除失败！',
                    };
                }
            });
        } catch(e) {
            if(e.message!="End") throw e;
        }
        return res
    })
    //接单任务1
    Mock.mock('task/acceptTask',"post",function(options){
        let taskId=JSON.parse(options.body).taskId
        let order=JSON.parse(options.body).order
        let list=[]
        console.log(order)
        //1、修改任务表中任务状态
        recommendTask.forEach(element => {
            if(element.taskId==taskId){
                element.status=1
            }
        });
        //2、订单表插入新数据
        if(localStorage.getItem('orderList')== null){
            console.log('1111')
            order.orderId=1
            console.log(order)
            list.push(order)
            console.log(list)
            localStorage.orderList=JSON.stringify(list)
        }else{
            console.log('222')
            list=JSON.parse(localStorage.getItem("orderList"))
            console.log(list)
            console.log(typeof(list))
            order.orderId=list.length+1
            list.push(order)
            localStorage.orderList=JSON.stringify(list)
        }
        console.log(localStorage.getItem('orderList'))
        let res={
            code:200,
            success:true,
            // msg:'接单成功！',
            taskId:taskId,
            orderId:order.orderId
        }
        return res
    })
    //接单任务2
    Mock.mock('task/addDraft',"post",function(options){
        let draft=JSON.parse(options.body).draft
        let dlist=[]
        console.log(draft)
        //3、文稿表插入新数据
        if(localStorage.getItem('draftList')== null){
            console.log('1111')
            draft.draftId=1
            console.log(draft)
            dlist.push(draft)
            console.log(dlist)
            localStorage.draftList=JSON.stringify(dlist)
        }else{
            console.log('222')
            dlist=JSON.parse(localStorage.getItem("draftList"))
            console.log(dlist)
            draft.draftId=dlist.length+1
            dlist.push(draft)
            localStorage.draftList=JSON.stringify(dlist)
        }
        console.log(localStorage.getItem('draftList'))
        let res={
            code:200,
            success:true,
            msg:'接单成功！',
            draftId:draft.draftId
        }
        return res
    })
    //文稿详情--根据文稿id查询详情
    Mock.mock('task/getDraftInfo',"get",function(options){
        console.log(JSON.parse(options.body).draftId)
        let res={}
        let draftlist=JSON.parse(localStorage.getItem("draftList"))
        draftlist.forEach(element => {
            console.log(element)
            if(element.draftId == (JSON.parse(options.body).draftId)){
                res={
                    code:200,
                    success:true,
                    draftInformation:element
                };  
            }
        });
        console.log(res)
        return res
    })
    //查询订单详情--根据订单id
    Mock.mock('task/getOrderInfo',"get",function(options){
        console.log(JSON.parse(options.body).orderId)
        let res={}
        let orderList=JSON.parse(localStorage.getItem("orderList"))
        orderList.forEach(element => {
            console.log(element)
            if(element.orderId == (JSON.parse(options.body).orderId)){
                res={
                    code:200,
                    success:true,
                    order:element
                };  
            }
        });
        console.log(res)
        return res
    })
    //提交文稿
    Mock.mock('task/publishDraft',"post",function(options){
        let draftInformation=JSON.parse(options.body).draftInformation
        console.log(draftInformation)
        let res={}
        let draftlist=JSON.parse(localStorage.getItem("draftList"))
        for (let index = 0; index < draftlist.length; index++) {
            if(draftlist[index].draftId==draftInformation.draftId){
                draftlist[index]=draftInformation
                console.log(draftlist)
                localStorage.draftList=JSON.stringify(draftlist)
                console.log(localStorage.getItem('draftList'))
                res={
                    code:200,
                    success:true,
                    msg:'提交成功！',
                };
            }
        }
        return res
    })
    //文稿管理（发布者）--按照用户id、任务状态、搜索内容，获取任务列表
    Mock.mock('task/getArticleList',"get",function(options){
        console.log(JSON.parse(options.body))
        let search=JSON.parse(options.body)
        let res={}
        let articleLists=[]
        let article = {}
        let aa={}
        let draft=JSON.parse(localStorage.getItem("draftList"))
        let order=JSON.parse(localStorage.getItem("orderList"))
        if(search.searchTask.length != 0){
            if(search.active==0){
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId && element.recommendSubject.indexOf(search.searchTask) != -1){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==1){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }else if(search.active==1){
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId && element.recommendSubject.indexOf(search.searchTask) != -1){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==0){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }else{
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId && element.recommendSubject.indexOf(search.searchTask) != -1){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==3){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }else{
            console.log('22222')
            if(search.active==0){
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==1){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }else if(search.active==1){
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            console.log(order[o])
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==0){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }else{
                recommendTask.forEach(element => {
                    console.log(element)
                    if(element.publisher==JSON.parse(options.body).userId){
                        console.log(element.taskId)
                        for(let o = 0; o < order.length; o++){
                            if(order[o].taskId==element.taskId){
                                console.log(order[o].orderId)
                                for(let d = 0; d < order.length; d++){
                                    if(draft[d].orderId==order[o].orderId){
                                        if(draft[d].status==3){
                                            article= Object.assign(aa,element,order[o],draft[d])
                                            console.log(article)
                                            articleLists.push(article)
                                            console.log(articleLists)
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
        console.log(articleLists)
        res={
            code:200,
            success:true,
            articleLists:articleLists
        };      
        return res
    })
    //需方--文章合格--修改订单&文稿对应项内容
    Mock.mock('task/passArticle',"post",function(options){
        let order=JSON.parse(options.body).order
        let draft=JSON.parse(options.body).draft
        console.log(order)
        console.log(draft)
        let res={}
        let orderList=JSON.parse(localStorage.getItem("orderList"))
        let draftlist=JSON.parse(localStorage.getItem("draftList"))
        for (let index = 0; index < draftlist.length; index++) {
            if(draftlist[index].draftId==draft.draftId){
                draftlist[index]=draft
                console.log(draftlist)
                localStorage.draftList=JSON.stringify(draftlist)
                console.log(localStorage.getItem('draftList'))
            }
        }
        for (let index = 0; index < orderList.length; index++) {
            if(orderList[index].orderId==order.orderId){
                orderList[index]=order
                console.log(orderList)
                localStorage.orderList=JSON.stringify(orderList)
                console.log(localStorage.getItem('orderList'))
                res={
                    code:200,
                    success:true,
                };
            }
        }
        return res
    })
    //添加账单
    Mock.mock('task/addAccount',"post",function(options){
        let account=JSON.parse(options.body).account
        let accountlist=[]
        console.log(account)
        if(localStorage.getItem('accountlist')== null){
            account.accountId=1
            console.log(account)
            accountlist.push(account)
            localStorage.accountlist=JSON.stringify(accountlist)
        }else{
            accountlist=JSON.parse(localStorage.getItem("accountlist"))
            account.accountId=accountlist.length+1
            accountlist.push(account)
            localStorage.accountlist=JSON.stringify(accountlist)
        }
        console.log(localStorage.getItem('accountlist'))
        let res={
            code:200,
            success:true,
            msg:'审核完成！',
        }
        return res
    })
    //添加建议
    Mock.mock('task/addAdvice',"post",function(options){
        let advice=JSON.parse(options.body).advice
        let draftlist=JSON.parse(localStorage.getItem("draftList"))
        let advicelist=[]
        console.log(advice)
        //1、修改文稿状态
        for (let index = 0; index < draftlist.length; index++) {
            if(draftlist[index].draftId==advice.draftId){
                draftlist[index].status=2
                console.log(draftlist)
                localStorage.draftList=JSON.stringify(draftlist)
                console.log(localStorage.getItem('draftList'))
            }
        }
        //2、添加建议信息
        if(localStorage.getItem('advicelist')== null){
            advice.adviceId=1
            console.log(advice)
            advicelist.push(advice)
            localStorage.advicelist=JSON.stringify(advicelist)
        }else{
            advicelist=JSON.parse(localStorage.getItem("advicelist"))
            advice.adviceId=advicelist.length+1
            advicelist.push(advice)
            localStorage.advicelist=JSON.stringify(advicelist)
        }
        console.log(localStorage.getItem('advicelist'))
        let res={
            code:200,
            success:true,
            msg:'提交完成！',
        }
        return res
    })
    //查询账单列表--根据用户&月份信息
    Mock.mock('task/getAccountList',"get",function(options){
        console.log(JSON.parse(options.body).userName)
        console.log(JSON.parse(options.body).monthData)
        let res={}
        let accountLists=[]
        let accountlist=JSON.parse(localStorage.getItem("accountlist"))
        accountlist.forEach(element => {
            console.log(element)
            if(element.userName == (JSON.parse(options.body).userName) && element.accountTime.indexOf(JSON.parse(options.body).monthData) != -1){
                accountLists.push(element)
            }
        });
        res={
            code:200,
            success:true,
            accountLists:accountLists
        };
        console.log(res)
        return res
    })
}