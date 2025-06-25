const express = require('express');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname, 'public');

const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMsgRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Mini message board - listening on port ${PORT}`);
});