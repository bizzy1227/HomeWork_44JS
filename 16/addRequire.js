
const fs = require('fs');
//подключаем чайл в котором будем смотреть установленные модули
let pack = require('./package.json');

//пушим в массив названия установленных модулей 
let arr = [];
for(key in pack.dependencies){
    arr.push(key);
}

module.exports.moveAllRequire = function(){
        fs.appendFileSync("index.js", '\r\n'+"//Подключение модулей с помощью модуля addRequire.js");
        fs.appendFileSync("index.js", '\r\n'+"const fs = require('fs');");
        fs.appendFileSync("index.js", '\r\n'+"const http = require('http');");
        fs.appendFileSync("index.js", '\r\n'+"//Подключаем модули которые указаны в package.json с помощью модуля addRequire.js");
        for(let i=0; i<arr.length; i++){
            // если в названии модуля встречается "-" заменяем его на "_" для корректного создания переменой (arr[i].replace("-","_"))
            fs.appendFileSync("index.js", '\r\n'+"const "+arr[i].replace("-","_")+" = require('"+arr[i]+"');");
            }
    
    };