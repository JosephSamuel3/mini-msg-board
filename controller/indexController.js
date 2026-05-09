const db = require("../db")

function getAllMessages(req, res){
   const messages = db;
   res.render("index", { messages: messages })
}

module.exports = getAllMessages;