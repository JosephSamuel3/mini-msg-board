const messages = require("../db");

function addNewMessage(req, res) {
    const user = req.body.user && req.body.user.trim();
    const text = req.body.text && req.body.text.trim();

    if (!user || !text) {
        return res.redirect("/new");
    }

    messages.push({ text, user, added: new Date() });
    res.redirect("/");
}

function getNewMessagesForm(req, res) {
    res.render("new");
}

module.exports = {
    addNewMessage,
    getNewMessagesForm,
};