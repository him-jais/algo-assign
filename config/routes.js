const express = require('express')
const router = express.Router()
const auth = require("../controllers/auth")

router.post('/contact',auth.contact)
module.exports = router 

