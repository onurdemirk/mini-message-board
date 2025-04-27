const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index", { messages } )
})

router.get("/new-message", (req, res) => {
    res.render("new-message")
})

module.exports = router