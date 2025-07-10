// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  if (head.val === target) return true;
  if (head === null) return false;

  return linkedListFind(head.next, target);
};

module.exports = {
  linkedListFind,
};
