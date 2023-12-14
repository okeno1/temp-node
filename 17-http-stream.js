var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
   // const text = fs.readFileSync('./Content/bigFile.txt','utf8')
    //res.end(text);
    const fileStream = fs.createReadStream('./Content/bigFile.txt','utf8');

    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err.toString())
    })

}).listen(5000)

