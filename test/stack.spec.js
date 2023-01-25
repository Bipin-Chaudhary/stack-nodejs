// unit testing of stack Api
const chai = require('chai')
const chaiHttp = require('chai-http')
const responseMessage = require('../utils/responseMessage')

const server = 'http://localhost:4000'

const expect = chai.expect

chai.use(chaiHttp)

describe('Stack API Testing', function () {
  // Get Stack
  describe('Get Stack Api', function () {
    it('It should return array of stack elements', function (done) {
      chai.request(server)
        .get('/stack')
        .end((res) => {
          expect(res.status).to.be.equal(200)
          expect(typeof res.body.data).to.be.equal('object')
          done()
        })
        .catch(function (err) {
          throw err
        })
    })
  })

  describe('Push Stack Api', function () {
    it('It should add element and return stack array', function (done) {
      chai.request(server)
        .post('/stack')
        .send({ element: 1 })
        .end((res) => {
          expect(res.status).to.be.equal(200)
          expect(typeof res.body.data).to.be.equal('object')
          expect(res.body.data[0]).to.be.equal(1)
          done()
        })
        .catch(function (err) {
          throw err
        })
    })

    // validation testing
    it('It should return validation error', function (done) {
      chai.request(server)
        .post('/stack')
        .send({ element: 'a' })
        .end((res) => {
          expect(res.status).to.be.equal(400)
          expect(res.body.message).to.be.equal(responseMessage.inputValidationError)
          expect(res.body.errors).to.be.not.undefined
          done()
        })
        .catch(function (err) {
          throw err
        })
    })
  })

  // Pop Stack
  describe('Pop Stack Api', function () {
    // success response
    it('It should return 200 status and array of stack elements', function (done) {
      chai.request(server)
        .delete('/stack')
        .end((res) => {
          expect(res.status).to.be.equal(200)
          expect(typeof res.body.data).to.be.equal('object')
          done()
        })
        .catch(function (err) {
          throw err
        })
    })

    // error response
    it('It should return 400 status and error message', function (done) {
      chai.request(server)
        .delete('/stack')
        .end((res) => {
          expect(res.status).to.be.equal(400)
          expect(res.body.message).to.be.equal(responseMessage.stackIsEmpty)
          done()
        })
        .catch(function (err) {
          throw err
        })
    })
  })
})
