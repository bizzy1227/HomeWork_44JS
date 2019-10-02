const fs = require('fs');

let text = fs.readFileSync("text.txt", "utf8");


let addNext = "2) Second line."

fs.appendFileSync("text.txt", '\r\n'+addNext);



//send Email
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jackjs194040@gmail.com',
    pass: 'leonardo4040'
  }
});

var mailOptions = {
  from: 'jackjs194040@gmail.com',
  to: 'odrytoty@ukr.net',
  subject: 'nodemailer test',
  text: 'Hello world'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});