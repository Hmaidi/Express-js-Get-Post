var express = require('express');


var app = express();
app.use(express.static('public_get'))

app.get('/index.html',function(req , res){
    res.sendFile(__dirname +"/" +'index.html');
})

app.get('/expressGet',function(req , res){
    res.send( '<p> First name : '+req.query.firstname + '</p> <p> Last Name : ' +req.query.lastname + '</p> Adress Email : ' +req.query.AdressEmail
    ) ;
     response = {
    firstname : req.query.firstname ,
    lastname  : req.query.lastname,
    AdressEmail :req.query.AdressEmail
    };
    console.log(response);
    res.end(JSON.stringify(response));

})

var server = app.listen(3000,function(){
    var host  = server.address().address;
    var port = server.address().port;
    console.log("app running on http:127.0.0.1:3000");
})