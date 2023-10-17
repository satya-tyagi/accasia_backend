const testController = require("../controller/test.controller");

const express=require('express')

const router = express.Router();



router.get("/", testController.testServer);

exports.router = router;
