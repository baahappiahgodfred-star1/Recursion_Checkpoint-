// Recursive palindrome function

function isPalindrome(word) {

    // Stop condition
    if (word.length <= 1) {
      return true;
    }
  
    // Compare first and last characters
    if (word[0] !== word[word.length - 1]) {
      return false;
    }
  
    // Recursive call
    return isPalindrome(
      word.slice(1, -1)
    );
  }
  
  
  // Tests
  console.log(isPalindrome("radar"));
  console.log(isPalindrome("kayak"));
  console.log(isPalindrome("php"));
  console.log(isPalindrome("hello"));