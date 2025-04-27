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

router.get("/messages/:index", (req, res) => {
    const index = Number(req.params.index)
    const message = messages[index]

    if(!message) {
        return res.status(404).render("404")
    }

    res.render('details', { message })
})

router.post("/new-message", (req, res) => {
    const userName = req.body.userName
    const messageText = req.body.messageText

    messages.unshift({
        user:  userName,
        text:  messageText,
        added: new Date()
      });

      res.redirect("/")
})

module.exports = router