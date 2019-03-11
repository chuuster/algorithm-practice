// https://leetcode.com/problems/palindrome-number/
// @param {number} x
// @return {boolean}

const getDigits = function(int) {
  int = Math.abs(int); 
  const result = []; 

  while (int >= 10) {
    result.push(int % 10); 
    int = Math.floor(int / 10); 
  }

  result.push(int); 
  return result; 
};

const isPalindrome = function (int) {
  if (int < 0) return false; 
  const digits = getDigits(int); 

  for (let i = 0; i < Math.floor(digits.length/2); i++) {
    let mirrorIdx = digits.length - i; 
    if (digits[i] !== digis[mirrorIdx]) return false;
  }

  return true; 
};