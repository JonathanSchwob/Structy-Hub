const maxValue = (nums) => {
  let max = -Infinity;

  for (let num of nums) {
    if (max < num) max = num;
  }

  return max;
};

module.exports = {
  maxValue,
};
