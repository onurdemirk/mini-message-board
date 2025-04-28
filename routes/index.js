const express = require("express")
const router = express.Router()
const db = require("../db/query")


router.get("/", async (req, res) => {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { messages })
  } catch (err) {
    console.log("Error in DB:", err)
    res.status(500).send("server error - please try again later")
  }
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

router.post("/new-message", async (req, res) => {
    const userName = req.body.userName
    const messageText = req.body.messageText

    try {
      await db.insertMessage(userName, messageText)
      res.redirect("/")
    } catch(err) {
      console.error("Message cannot be added:", err);
      res.status(500).send("Message cannot be added (Error)");
    }     
})

module.exports = router