const nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "jiomerelal.test",
        pass: "Iw2bagpiml_"
    }
});

var mailOptions={
    to : "rohan.pareek@mindtree.com",
    subject : "Node Mail",
    text : "Hi, This mail is auto generated through Node.",
    html : "<h1>And this is with <b>HTML</b><i>tags</i></h1>"
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
 if(error){
        console.log(error);
    
 }else{
        alert('Successfully sent the mail!!!');
   
     }
});
