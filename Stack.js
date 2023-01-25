const config = require('./config')

class Stack {
  constructor (size) {
    this.size = size
    this.stackArr = new Array(this.size)
    this.top = -1
  }

  push (value) {
    if (this.top === this.size - 1) return 'stack-overflow'
    this.stackArr[++this.top] = value
  }

  pop () {
    if (!this.stackArr.length) return 'stack-underflow'
    this.stackArr[this.top--] = null
  }

  peek () {
    if (this.top === -1) return 'stack-underflow'
    return this.stackArr[this.top]
  }

  isEmpty () {
    return this.top === -1
  }

  getStack () {
    return this.stackArr.filter((ele) => ele !== null)
  }

  getSize () {
    return this.size
  }
}

const stackObj = new Stack(parseInt(config.STACK_SIZE))

module.exports = stackObj
