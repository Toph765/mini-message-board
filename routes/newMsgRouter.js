const { Router } = require('express');

const newMsgRouter = Router();

newMsgRouter.get("/", (req, res) => {
    res.render("../views/newMsg");
})

module.exports = newMsgRouter;