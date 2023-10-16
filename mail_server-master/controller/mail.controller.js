const nodemailer = require("nodemailer");

const Mail = require("../model/mail");


exports.sendMail = async (req, resp) => {
  const { reciepents, subject, msg } = req.body;

//   if(reciepents && subject && msg){
try{
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: "info@effectualservices.in",
      pass: "Nak45276",
    },
  });

  // setup email data with unicode symbols

  let mailOptions = {
    from: "info@effectualservices.in",
    to: reciepents,
    subject: subject,
    text: msg,
  };

  // send mail with defined transport object

   transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });

//SEND IN DB=======

  const mail = new Mail(req.body);
  const data = await mail.save();

  resp.status(200).json({ status: "true" ,data:data});
}
  catch(err){
  resp.status(401).json({ status: "false" ,data:err});
  }
//   }
//   else{
//   resp.status(401).json({ status: "false" ,data:req.body});

//   }
  
};
