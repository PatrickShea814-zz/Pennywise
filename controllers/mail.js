const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = function(req,res){
 
  var data = req.body;
  console.log('THIS IS THE DATA', data)

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: "WishPennyWise@gmail.com",
      pass: process.env.PASSWORD
    }
  });
  
  var mailOptions = {
    from: data.email,
    to: 'WishPennyWise@gmail.com',
    subject: data.topic,
    html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.topic}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
    
  (error, response) => {
    if(error) {
      console.log('ERROR', error)
      res.send(error)
    }else {
      res.sendStatus(200).end()
    }
    smtpTransport.close();
  });
  
  }
  