// stack
class Stack {
  constructor () {
    this.stackArr = [] // todo - make the size configurable
  }

  push (value) {
    this.stackArr.push(value)
    return value
  }

  pop () {
    if (!this.stackArr.length) return 'Empty stack'
    return this.stackArr.pop()
  }

  seek () {
    if (!this.stackArr.length) return 'Empty stack'
    return this.stackArr[this.stackArr.length - 1]
  }

  isEmpty () {
    return !this.stackArr.length
  }

  getStack () {
    return this.stackArr
  }

  getSize () {
    return this.stackArr.length
  }
}

module.exports = new Stack()
