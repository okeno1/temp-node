const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(
    'Oops! We can\'t seem to find to page you are looking for'
       
    )
})

server.listen(5000)
