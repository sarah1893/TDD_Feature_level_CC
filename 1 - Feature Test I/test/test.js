console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/features/user-visits-root-test.js', 'utf8');

describe('', function () {
  it('', function() {
    
    let structureSelector = function(){
    describe($description, () => {
      describe($descriptionTwo, () => {
        it($it, () => {
          
          browser.url($path);
          
        });
      });
    });

    };
      
    let varCallbacks = [
    
    function($description, $descriptionTwo, $it, $path){
     if (typeof $description.value !== 'string' || typeof $descriptionTwo.value !== 'string' || typeof $it.value !=='string'){
         //return error
       return {failure: "Is the first argument in your `describe` block a string? Is the first argument of your `it` block a string? "};
         }
      if($path.value !== '/'){
        return {failure: "Did you pass `/` into the `browser.url()`?"}
              }
     return true;
    }
    
    ]
      
   let isMatchSelector = Structured.match(code, structureSelector,{varCallbacks: varCallbacks});
   let failureMessage = varCallbacks.failure ||"Did you add `browser.url('/')` to the callback function inside your `it` block?";
    
    assert.isOk(isMatchSelector , failureMessage)
  })
})