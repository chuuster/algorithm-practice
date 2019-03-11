// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const removeDuplicates = function (nums) {
  let i = 0; 
  
  for(let j = i + 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j]; 
    }
  }

  return i + 1; 
};