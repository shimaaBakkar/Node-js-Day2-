const fs = require('fs');
const http=require('http');

let productsDB=JSON.parse(fs.readFileSync("products.json",'utf-8'))

const server=http.createServer(function(request,response)
{
    let urls=request.url.split('/');
    if(urls[1]=='home')
    {
        let html=fs.readFileSync("products.json",'utf-8');
        response.write(html);
    }
    else if((urls[1]=='products') && isFinite(urls[2]))
    {
        let id = urls[2]
        let product = productsDB[parseInt(id)]
        products = JSON.stringify(product)
        console.log(id);
        response.write(products)
    }
    else if((urls[1]=='products'))
    {
        let products = JSON.stringify(productsDB)
        response.write(products)
    }
    else
    {
        response.writeHead(404);
        response.write('<h1>Error</h1> <br> <h2>page not found</h2>')
    }
    response.end()
})

server.listen(7777,function()
{
    console.log('hi i listen in port 7777');
})