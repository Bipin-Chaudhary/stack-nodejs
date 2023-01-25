const stack = require('../Stack')
const responseMessage = require('../utils/responseMessage')
const statusCode = require('../utils/statusCode')

class StackController {
  async getStack (req, res) {
    return res.status(statusCode.Accepted).json({ message: responseMessage.fetchedSuccessfully.replace('##', 'stack'), data: stack.getStack() })
  }

  async pushStack (req, res) {
    const { element } = req.body

    stack.push(parseInt(element))

    return res.status(statusCode.Accepted).json({ message: responseMessage.addedSuccessfully.replace('element'), data: stack.getStack() })
  }

  async popStack (req, res) {
    if (stack.isEmpty()) return res.status(statusCode.BadRequest).json({ message: responseMessage.stackIsEmpty })

    stack.pop()

    return res.status(statusCode.Accepted).json({ message: responseMessage.deletedSuccessfully.replace('##', 'stack'), data: stack.getStack() })
  }
}

module.exports = new StackController()
