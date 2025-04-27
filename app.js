const express = require("express")
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const mainRouter = require('./routes/index')

app.use("/", mainRouter)
app.use("/new-message", mainRouter)


app.listen(PORT, () => {
    console.log(`Server is working: http://localhost:${PORT}`)
})