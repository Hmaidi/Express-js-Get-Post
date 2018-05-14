var express = require('express');
var bodyParser     =         require("body-parser");

var app = express();
app.use(express.static('public_post'))
var urlcode = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.get('/index.html',function(req , res){
    res.sendFile(__dirname +"/" +'index.html');
})

app.post('/expressPost',urlcode,function(req , res){
   
     response = {
        firstname : req.body.firstname ,
        lastname  : req.body.lastname,
        AdressEmail :req.body.AdressEmail
    };

    console.log(response);
    res.end(JSON.stringify(response));

})

var server = app.listen(3000,function(){
    var host  = server.address().address;
    var port = server.address().port;
    console.log("app running on http:127.0.0.1:3000");
})