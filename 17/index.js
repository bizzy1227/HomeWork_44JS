const Converter = require('./converter');
const http = require('http');
const request = require('request');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

http.createServer(function(req, res){
     request(url, function(error, response, body){
         //прописываем корректную кодироку
         res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
         let data = JSON.parse(body);
         let buy = data[0].buy;
         let sale = data[0].sale;
         let saleUSD = new Converter(buy);
         let buyUSD = new Converter(sale);
         res.write('За 100 долларов Вы получите '+saleUSD.convertToUa(100)+' гривен. ');
         res.write('За 1000 гривен Вы получите '+buyUSD.convertToUs(1000)+' долларов.');
         res.end();
     }); 
}).listen(8080, function(){
    console.log('Server at localhost:8080');
});

