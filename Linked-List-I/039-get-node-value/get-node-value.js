// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index, currentIndex = 0) => {
  if (head === null) return null;
  if (currentIndex === index) return head.val;

  return getNodeValue(head.next, index, currentIndex + 1)
};

module.exports = {
  getNodeValue,
};
