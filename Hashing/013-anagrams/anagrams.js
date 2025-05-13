const anagrams = (s1, s2) => {
  const letters = {};

  for (let letter of s1) {
    if (!(letter in letters)) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }

  for (let letter of s2) {
    if (!(letter in letters)) {
      return false;
    } else {
      letters[letter] -= 1;
    }
  }

  for (let letter in letters) {
    if (letters[letter] !== 0) return false;
  }

  return true;
};

module.exports = {
  anagrams,
};
