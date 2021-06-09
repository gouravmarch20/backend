const express = require('express')
const router = express.Router()
const { singup , singin } = require('../controllers/auth.controller')


router.post('/singup', singup)

router.get('/singin', singin)

module.exports = router
 