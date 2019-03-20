// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; 
  
  let minStrLength = Math.min(...strs.map(str => str.length)); 
  let prefix = ""; 

  for(let i = 0; i < minStrLength; i++) {
    const letter = strs[0][i];
    let common = true; 

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) common = false;
      if (!common) break;
    }

    if (common) {
      prefix += letter; 
    } else {
      break; 
    }
  }

  return prefix; 
};