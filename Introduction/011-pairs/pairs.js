const pairs = (elements) => {
  const output = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      output.push([elements[i], elements[j]]);
    }
  }
  return output;
};

module.exports = {
  pairs,
};
