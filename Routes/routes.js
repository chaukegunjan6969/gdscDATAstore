const express = require('express')

const routers = express.Router();

const {dataRegister} = require('../controller/Controller')

routers.post("/gdscmemberadd", dataRegister);

module.exports = routers

