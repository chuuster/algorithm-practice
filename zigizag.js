// https://leetcode.com/problems/zigzag-conversion/

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

const convert = function (s, numRows) {
  if (numRows === 1 || s === "") return s; 
  if (numRows <= 0) return null; 

  let rows = new Array(numRows).fill().map(a => []); 
  let down = true; 
  let result = ""; 

  for(let i=0; i < s.length; i++) {
    if (i < numRows - 1) rows[i].push(s[i]);  
    if (i >= numRows - 1) {
      const iMod = i % (numRows - 1); 
      if (i % (numRows - 1) === 0) down = !down; 

      if (down) {
        rows[iMod].push(s[i])
      } else {
        rows[numRows - iMod - 1].push(s[i]);  
      } 
    }
  }

  rows.forEach(row => result += row.join("")); 
  return result; 
};