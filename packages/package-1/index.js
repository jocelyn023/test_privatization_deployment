// const base = require('base')
// const _ = require('lodash')
// base.test()
// console.log(_.VERSION);
const base = require('l-lerna-test-base')
module.exports = {
  test () {
    console.log('lerna-test');
    base.test()
  }
}