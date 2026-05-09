const { Router } = require("express");
const { addNewMessage, getNewMessagesForm } = require("../controller/newMsgController");

const newRouter = Router();

newRouter.get("/", getNewMessagesForm);

newRouter.post("/", addNewMessage);

module.exports = newRouter