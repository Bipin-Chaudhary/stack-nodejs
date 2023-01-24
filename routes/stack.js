const express = require('express')
const router = express.Router()
const stackController = require('../controllers/stack')

router.get('/', stackController.getStack)

router.post('/', stackController.pushStack)

router.delete('/', stackController.popStack)

module.exports = router
