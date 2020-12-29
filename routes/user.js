const router = require('koa-router')();
const {login} = require('./../controller/user')
const {SuccessModel,ErrorModel} = require('./../model/resModel')

router.prefix('/ajax')

router.post('/login',async (context,next)=>{
    const {userName,password} = context.request.body;
    const userData = await login(userName,password);
    if (userData.userName) {
        context.session.username = userData.userName;
        context.session.realname = userData.realName;
        context.body = new SuccessModel(userData)
    }else {
        context.body = new ErrorModel("登录失败")
    }
})

module.exports = router
