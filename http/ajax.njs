#!/usr/local/bin/node
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var msg="";
var sid1=param.sid1;
var sid2=param.sid2;
if (sid1==sid2){
	msg=require("./name.json")[sid1];
}else {
	if(require("./name.json")[sid1]){
		msg=require("./name.json")[sid1];
	}else{
		msg=require("./name.json")[sid2];
	}
}
if(!msg){
	msg="Sorry, you're not our member.";
}

setTimeout(() => {
	console.log('Content-type: text/html; charset=utf-8\n');
	console.log('<h1>Hello! '+msg+'</h1>');
},2000)
