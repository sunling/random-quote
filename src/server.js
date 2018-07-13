const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+"/dist"));
var port = process.env.PORT || 8080;
app.listen(port);

//PathLocationStrategy
app.get('/*',(req,res)=>{
    //going to allow angular to handle our routing instead of the server
    res.sendFile(path.join(__dirname+"/dist/index.html"));
});

console.log('The server is up listening port '+port);