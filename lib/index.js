'use strict'


const replaceFunction = require('./replace-function')

const path = require('path')
const fs = require('fs')

module.exports = function(source) {
 
  return include(source)

  /**
   * utils
   */
  function include(text) {
    text = replaceFunction(text, {
      prefix: '@@',
      suffix: '',
      name: 'include',
      handler: includeHandler
    })

    function includeHandler(inst) {
      var args = /[^)"']*["']([^"']*)["'](,\s*({[\s\S]*})){0,1}\s*/.exec(inst.args)

      if (args) {
        var includePath = path.resolve('./test/fixtures', args[1])
        var includeContent = fs.readFileSync(includePath, 'utf-8')
        return include(includeContent)
      }
    }
    return text;
  }
}