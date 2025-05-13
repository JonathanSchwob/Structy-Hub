const longestWord = (sentence) => {
  const sentenceArray = sentence.split(' ');
  let longest = null;

  for (let word of sentenceArray) {
    if (longest === null || word.length >= longest.length) longest = word;
  }

  return longest;
};

module.exports = {
  longestWord,
};
