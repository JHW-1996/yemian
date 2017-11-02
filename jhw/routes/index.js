var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'baobei'
})
/* GET home page. */
router.post('/',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	var uid=req.body.id
	var title=req.body.title
	var name=req.body.name
	var detail=req.body.detail
	
	console.log(req.body)
	connection.query('INSERT INTO jhw (uid,title,name,detail) VALUES ('+uid+',"'+title+'","'+name+'","'+detail+'")',function(err,rows,fields){
		res.send(rows)
		console.log(rows)
	})
})


router.post('/list',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	var uid=req.body.id
	
	
	console.log(uid)
	connection.query('SELECT * FROM jhw WHERE uid='+uid,function(err,rows,fields){
		res.send(rows)
		console.log(rows)
	})
})
module.exports = router;
