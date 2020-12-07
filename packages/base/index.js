const _ = require('lodash')

import common1 from './src/components/common1'
console.log(_.VERSION);
module.exports = {
    test () {
      console.log('base-test12');
    }
}


export { common1 }
