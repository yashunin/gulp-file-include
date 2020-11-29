
'use strict'

const fileIncludePlugin = require('..')
const Vinyl = require('vinyl')
const should = require('should')
const fs = require('fs')

describe('## gulp-file-include', () => {
  var result = fs.readFileSync('test/fixtures/result.html', 'utf8')

  describe('# default', () => {
    it('file', done => {
      var file = new Vinyl({
        path: 'test/fixtures/index-01.html',
        contents: fs.readFileSync('test/fixtures/index-01.html')
      })
      var newstring = fileIncludePlugin(String(file.contents))
      String(newstring).should.equal(result)
      done()

    })

  })

})
