//https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const lookup = {};

  nums.forEach((num, idx) => {
    lookup[num] = idx;
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (lookup[complement] && lookup[complement] !== i) return [i, lookup[complement]];
  }

  return false;
};

const twoSumSorted = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (j > i) {
    let sum = nums[i] + nums[j];
    if (sum === target) return [i + 1, j + 1];
    if (sum < target) i++;
    if (sum > target) j--;
  }
};

const twoSumBST = function(root, target) {

};