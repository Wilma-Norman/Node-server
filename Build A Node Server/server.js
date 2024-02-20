const http = require(`node:http`)
const url= require(`url`)
const fs = require(`fs`)

http.createServer((req, res) => {
    res.writeHead(200,"the respnonse is ok")

    if(req.url.includes(`/about`)) {
        fs.readFile(`info.txt`, (err,data) => {
            res.end(data)
        })
        
    } else if(req.url.includes(`/super`)) {
        fs.readFile(`super.txt`, (err,data) => {
            res.end(data)
        })

    } else if(req.url.includes(`/links`)) {
        fs.readFile(`links.html`, (err,data) => {
            res.end(data)
        })

    } else{
        fs.readFile(`index.html`, (err,data) => {
            res.end(data)
        })        
    }     
        
}).listen(3030)