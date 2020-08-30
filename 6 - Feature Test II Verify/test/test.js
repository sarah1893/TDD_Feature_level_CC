console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/features/user-visits-root-test.js', 'utf8');


describe('', function () {
  it('', function() {
    
 let structureSelector = function(){
        
    describe(_, () => {
    
      describe('posting a message', () => {
        it('saves the message with the author information', () => {
          
          const $messageHolder = $message;
          const $authorHolder = $author;

          browser.url($path);
          browser.setValue($inputAuthor, $authorHolder);
          browser.setValue($inputMessage, $messageHolder);
          
          assert.include( browser.getText('#messages'), $messageHolder);
          assert.include( browser.getText('#messages'), $authorHolder);
    });
  });
    });

    };
      
   
      
   let isMatchSelector = Structured.match(code, structureSelector);
   let failureMessage = 'Did you write two `assert.include()` statements? Did you pass the correct variables in as arguments?';
    
    assert.isOk(isMatchSelector , failureMessage)
  })
})