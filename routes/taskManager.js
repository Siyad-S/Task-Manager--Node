const express = require("express")
const router = express.Router()
const {
    postTask
} = require("../controllers/taskController")

router.route("/").post(postTask)

module.exports = router