const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const app = express();
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
router.get('/', (req, res) => {
    res.send('Rohan\'s server...');
})


router.get('/sendmail', (req, res) => {
    smtpTransport.sendMail(mailOptions, function(error, response){
 if(error){
        console.log(error);
    res.send("error");
 }else{
    MongoClient.connect('mongodb://<rohan>:<Iw2bagpiml_>@ds243963.mlab.com:43963/testmongodb', function (err, client) {
        if (err) {
            
            res.send(err);
            return;
        }
        else
            var db = client.db('testmongodb')
        db.collection('testcollection').insertOne({
            user: 'Rohan',
            email: 'jiomerelal@gmail.com'
        })
            .then(result, err => {
                if(result) {
                    res.send('inserted')
                }
                else {
                    res.send(err)
                }
            })
    })

    res.send("sent");
     }
});
})


module.exports = router;