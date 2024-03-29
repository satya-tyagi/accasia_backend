const nodemailer = require("nodemailer");

const Mail = require("../model/mail");

exports.sendMail = async (req, resp) => {
  const { reciepents, subject, msg } = req.body;

  //   if(reciepents && subject && msg){
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "acacia@effectualservices.in",
        pass: "Yok56934",
      },
    });

    // setup email data with unicode symbols
    let sendText=`Hi, you have recieved a message from: ${subject} my email is: ${reciepents} and my msg: ${msg}`

    let mailOptions = {
      from: "acacia@effectualservices.in",
      to: 'nrussell@acaciaresearchgroup.com',
      subject: 'Acacia form submit Data',
      text: sendText,
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

    resp.status(200).json({ status: "true", data: data });
  } catch (err) {
    resp.status(401).json({ status: "false", data: err });
  }
  //   }
  //   else{
  //   resp.status(401).json({ status: "false" ,data:req.body});

  //   }
};
