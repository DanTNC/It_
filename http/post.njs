#!/usr/local/bin/node
var fs = require('fs');
var qs = require('querystring');
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));
var name;
if(!(name=require("./name.json")[param.sid])){
	name="Sorry you're not our member.";
}

console.log('Content-type: text/html; charset=utf-8\n');
console.log('<h1>Hello! '+name+'</h1>');
