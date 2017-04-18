#!/usr/local/bin/node
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);

console.log('Content-type: text/html; charset=utf-8\n');
var name;
if(!(name=require("./name.json")[param.sid])){
	name="Sorry you're not our member.";
}
console.log('<h1>Hello! '+name+'</h1>');

