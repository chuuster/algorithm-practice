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