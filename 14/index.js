const http = require('http'); //подключаем модули http and fs
const fs = require('fs');
const request = require('request');//подключили модуль для запросов(предварительно надо установить его)


const page = fs.readFileSync('index.html');
//запустили сервер
http.createServer(function(req, res){
    //отправляем запрос на сторонний API
     request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2LL3R7yJOveApsLk7p7u9mi_n8CCYVV8LRlGbhxfF64tWwCSKRgJREPC4', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //Выводим в консоль полученый JSON, предварительно отпарсив его в объект JS 
  console.log(JSON.parse(body)); // Print the HTML for the Google homepage.
});
 
    //console.log(req);
    //сравниваем значения свойства req.url (запрос по адресной строке)
    if(req.url === '/'){  
        res.write('Hello world');
        // обязательный метод для разрыва
        res.end();
    } else if(req.url === '/contact'){
        res.end(page);
    
    } else if(req.url === '/about') {
        console.log(req.headers);
        console.log(req.url);
        res.end();
    } else {
        console.log(req.url);
    }
// метод в котором указываем порт 3000,8000,8080
}).listen(8000, function(){
    console.log('Server at http://localhost:8000');
})
