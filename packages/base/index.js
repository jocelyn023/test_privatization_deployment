const _ = require('lodash')

import common2 from './src/components/common2'
console.log(_.VERSION);
module.exports = {
    test () {
      console.log('base-test12');
    }
}


export { common2 }
