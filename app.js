const express = require("express")
const path = require("node:path");
const app = express();

const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const mainRouter = require('./routes/index')

app.use("/", mainRouter)
app.use("/new-message", mainRouter)

app.use((req, res) => {
    res.status(404).render('404');
  });

app.listen(PORT, () => {
    console.log(`Server is working: http://localhost:${PORT}`)
})