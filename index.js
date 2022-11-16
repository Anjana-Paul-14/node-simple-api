
//const express = require('express');
var express = require('express');

//const app = express();
var app = express();

/*
app.get('/',(req,res) => {
    res.send('hello');
});
*/
/*
app.get('/api/sum/:a/:b',function(req,res,next) {
   
     res.send(req.params);
     console.log('aaaaa');
     
 });
 app.post('/', function(req,res,next){
res.send('the sum is');
 });
*/


app.get('/api/sum/:a/:b',(req,res)=>{
   //res.send(a+b);
    //res.send(req.params);
    console.log('cccc');
    var num1 = req.params.a;
    console.log(num1);
    var x = parseInt(num1);
    var num2 = req.params.b;
    console.log(num2);
    var y = parseInt(num2);
    
    var add = x + y;
    var addj = { "sum":add.toString()};
    res.send(addj);
    
    //var sum = JSON.parse(num1,num2);
    console.log('aaaaa');
    //res.send(req.params.a+b);
});
//console.log('bbbbb');
/*
app.get('/api/sum/:a/:b',(req,res)=>{
    console.log('cccc');
   // var a=req.body.a;
   // var b=req.body.b;
    var add=a+b;
    res.send('sum is: '+ add);
   // res.send(req.params);
});

*/
app.listen(8080, () =>{
 console.log('listening')
});