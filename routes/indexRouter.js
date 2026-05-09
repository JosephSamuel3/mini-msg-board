const { Router } = require("express");
const getAllMessages = require("../controller/indexController");

const indexRouter = Router()

indexRouter.get("/", getAllMessages)

module.exports = indexRouter