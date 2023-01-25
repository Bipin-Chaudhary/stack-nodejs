const express = require('express')
const router = express.Router()
const stackController = require('../controllers/stack')
const { body } = require('express-validator')
const responseMessage = require('../utils/responseMessage')

router.get('/', stackController.getStack)

router.post('/', [
  body('element')
    .trim()
    .isInt({ min: 0 }).withMessage(responseMessage.numbersOnly)
], stackController.pushStack)

router.delete('/', stackController.popStack)

module.exports = router
