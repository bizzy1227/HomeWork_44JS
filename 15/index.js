//запуск сервера через модуль nodemon (nodemon index.js), 
//позволяет не перезапускать каждый раз сервер после изменений
let EventEmitter = require('events');
let fs = require('fs');
let http = require('http')
let myEmitter = new EventEmitter();

let admin = {
    name: 'Admin'
};
let user = {
    name: 'John',
    age: 31,
    online: false,
};

http.createServer(function(req, res){
//навешиваем события 
console.log(admin);
myEmitter.on('message', function(){
    //отправляем сообщение for user
   if(user.online){
        admin.sendMessage = {
            forUser: 'i will ban you'
        };
        user.newMessage = {
            fromAdmin: 'i will ban you'
        };
   } else { // если user offline получаем сообщение об этом
        admin.newMessage = {
        formAdmin: 'User '+user.name+' offline'
        };
        console.log(admin)
   }
    //console.log(user.newMessage);
});


myEmitter.on('login', function(){
    user.online = true;
    user.dateVisit = new Date;
    console.log(user);
});

myEmitter.on('logout', function(){
    user.online = false;
    user.dateExit = new Date;
    //получаем время которое user был в сети
        let h = user.dateExit.getHours()-user.dateVisit.getHours();
        let m = user.dateExit.getMinutes()-user.dateVisit.getMinutes();
        let s = user.dateExit.getSeconds()-user.dateVisit.getSeconds();
        
    user.dateSession ="Hours: "+h+", minutes: "+m+", seconds: "+s;
 
   // console.log(data);
  // user.dateSession = 
    console.log(user);
});
//сохраняем(дозаписываем) в файл save.txt" данные о user
myEmitter.on('save', function(){
    fs.appendFileSync("save.txt", '\r\n'+JSON.stringify(user));
});


//вызываем события
myEmitter.emit('login');

setTimeout(function(){
    myEmitter.emit('logout');
}, 3000);

//если message вызвать после события logout, user не получит сообщение
// а админ получит оповещение о том что user offline
setTimeout(function(){
    myEmitter.emit('message');
}, 2000);

setTimeout(function(){
    myEmitter.emit('save');
}, 4000);
console.log(admin);
}).listen(8000, function(){
    console.log('Server at http://localhost:8000')
})