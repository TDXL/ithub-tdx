const express = require('express')


// 加载所有的处理函数模块
const index = require('./controllers/index')
const user = require('./controllers/user')
const topic = require('./controllers/topic')
const product = require('./controllers/product')
const category = require('./controllers/category')

const router = express.Router()

// router.get('/',(req,res)=>{
// 	res.send('index page')
// })
router
	.get('/',index.showIndex)

router
	.get('/signin',user.showSignin)
	.post('/signin',user.signin)
	.get('/signup',user.showSignup)
	.post('/signup',user.signup)
	.post('/signout',user.signout)

// 话题相关
router
	.get('/topic/create',topic.showCreate)
	.post('/topic/create',topic.create)
	.get('/topic/:topicID',topic.show)
	.get('/topic/:topicID/edit',topic.showEdit)
	.post('topic/:topicID/edit',topic.edit)
	.post('/topic/:topicID/delete',topic.delete)

module.exports = router