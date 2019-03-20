// https://leetcode.com/problems/longest-palindromic-substring/

const isPalindrome = function (s) {
  for(let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return false; 
  }

  return true; 
}; 

const longestPalindrome = function (s) {
  for(let )
};