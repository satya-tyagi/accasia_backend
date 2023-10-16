const mailController = require("../controller/mail.controller");

const express=require('express')

const router = express.Router();



router.post("/", mailController.sendMail);

exports.router = router;
