const stack = require('../Stack')
const responseMessage = require('../utils/responseMessage')
const statusCode = require('../utils/statusCode')
const { validationResult } = require('express-validator')

class StackController {
  async getStack (req, res) {
    return res.status(statusCode.OK).json({ message: responseMessage.fetchedSuccessfully.replace('##', 'stack'), data: stack.getStack() })
  }

  async pushStack (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(statusCode.BadRequest).json({ message: responseMessage.inputValidationError, errors: errors.array() })
    }

    const { element } = req.body

    const data = stack.push(parseInt(element))
    if (data === 'stack-overflow') return res.status(statusCode.BadRequest).json({ message: 'stack overflowed' })

    return res.status(statusCode.OK).json({ message: responseMessage.addedSuccessfully.replace('##', 'element'), data: stack.getStack() })
  }

  async popStack (req, res) {
    if (stack.isEmpty()) return res.status(statusCode.BadRequest).json({ message: responseMessage.stackIsEmpty })

    stack.pop()

    return res.status(statusCode.OK).json({ message: responseMessage.deletedSuccessfully.replace('##', 'stack'), data: stack.getStack() })
  }
}

module.exports = new StackController()
