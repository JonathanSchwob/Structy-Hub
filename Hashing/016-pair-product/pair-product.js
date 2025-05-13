const pairProduct = (numbers, targetProduct) => {
  const pastNumbers = {};

  for (let i = 0 ; i < numbers.length; i++) {
    if ((targetProduct / numbers[i]) in pastNumbers) {
      return [pastNumbers[targetProduct / numbers[i]], i];
    }
    pastNumbers[numbers[i]] = i;
  }
};

module.exports = {
  pairProduct,
};
