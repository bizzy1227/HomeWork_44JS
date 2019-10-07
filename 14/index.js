const http = require('http'); //подключаем модули http and fs
const fs = require('fs');

const page = fs.readFileSync('index.html');

http.createServer(function(req, res){
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
