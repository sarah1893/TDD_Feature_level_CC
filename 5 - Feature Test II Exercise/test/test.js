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
          // how could I make it irrelevant in what order these variables were named/written
          const message = $message;
          const author = $author;
          
          browser.url($path);
    });
  });
    });

    };
      
    let varCallbacks = [
    
    function($message, $author, $path){
      if(typeof $message.value !== 'string'|| typeof $author.value !== 'string'){
        return {failure: "Did you create two variables named `author` and `message` and set them equal to strings?"}
              }
      if ($path.value !== '/'){
      return {failure: "Did you pass `/` as a string to `browser.url()`?"}
      }
     return true;
    }
    
    ]
      
   let isMatchSelector = Structured.match(code, structureSelector,{varCallbacks: varCallbacks});
   let failureMessage = varCallbacks.failure ||"Did you pass `/` as a string to `browser.url()`?";
    
    assert.isOk(isMatchSelector , failureMessage)
  })
})