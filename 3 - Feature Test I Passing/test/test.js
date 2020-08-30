console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/index.html', 'utf8');

describe('', function () {
  it('', function() {
   // console.log(code)
    //really I just want to test if an element with the id messages exists in code
    //assert.include(code, '<section id="messages"></section>', 'Make sure your code has no line breaks.')
    assert.match(code, /<section\s+id=("|')messages("|')\s*>[\s\S]*<\/section\s*>/, 'Make sure your code has no line breaks.')

  })
})