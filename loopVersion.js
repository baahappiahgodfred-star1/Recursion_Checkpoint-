// Loop version using counters

function isPalindromeLoop(word) {

    for (
      let i = 0;
      i < word.length / 2;
      i++
    ) {
  
      if (
        word[i] !==
        word[word.length - 1 - i]
      ) {
  
        return false;
      }
    }
  
    return true;
  }
  
  
  // Tests
  console.log(isPalindromeLoop("radar"));
  console.log(isPalindromeLoop("kayak"));
  console.log(isPalindromeLoop("php"));
  console.log(isPalindromeLoop("hello"));