// Js ES6 Import Export
// import express from 'express';

//NodeJs Import Expert
const express = require('express');
const app = express();

//cbfn = callbak function
//obj.method('string',cbfn); // Actual Arg
app.get('/', function (req, res) {
    res.send('Hello Anil OKLABS World') 
});

//app.get(route,cbfn);

//obj.method(int);
app.listen(3000,function(){
    console.log('Server is running on port 3000');
}); //Actual Param /Arg
//3000  POrt Number

// function(){} = cfbn