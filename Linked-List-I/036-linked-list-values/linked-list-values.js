// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  const result = [];

  const traverse = (head) => {
    if (head === null) return;
    result.push(head.val);
    traverse(head.next);
  }

  traverse(head);

  return result;
};

module.exports = {
  linkedListValues,
};
