const pairSum = (numbers, targetSum) => {
  const pastNumbers = {};

  for (let i = 0; i < numbers.length; i++) {
    if ((targetSum - numbers[i]) in pastNumbers) {
      return [pastNumbers[targetSum - numbers[i]], i];
    }
    pastNumbers[numbers[i]] = i;
  } 
};

module.exports = {
  pairSum,
};
