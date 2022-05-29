exports.palindrome = function palindrome(word) {

        let letters = /\W/ig;
        word = word.toString().toLowerCase().split(letters).join('')
      
        if(word.length === 0 || word.length === 1){
          return true
        } else {
          return (word.slice(0, 1) === word.slice(-1)) && 
          palindrome(word.slice(1, -1))
        }

};