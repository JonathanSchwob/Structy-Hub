// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  const result = 0;

  const traverse = (head) => {
    if (head === null) return;
    result += head.val;
    return traverse(head.next);
  }

  traverse(head);
  return result;
};

module.exports = {
  sumList,
};
