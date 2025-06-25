const { Router } = require('express');

const indexRouter = Router();

const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        id: 1,
        text: "Hello world!",
        user: "Charles",
        added: new Date(),
    },
];

indexRouter.get("/", (req, res) => {
    res.render("../views/index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
    const userName = req.body.userName;
    const messageText = req.body.messageText;
    const id = messages[messages.length - 1].id + 1;
    messages.push({ id: id, text: messageText, user: userName, added: new Date() });

    res.redirect("/");
});

indexRouter.get("/details/:messageId", (req, res) => {
    const { messageId } = req.params;
    const i = messages.findIndex((msg) => {
        return msg.id === parseInt(messageId);
    });

    res.render("../views/details", {message: messages[i]});
});

module.exports = indexRouter;