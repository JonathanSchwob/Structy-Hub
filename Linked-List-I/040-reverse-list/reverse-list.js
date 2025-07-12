// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  let temp = head.next;
  head.next = prev;

  return reverseList(temp, head)
};

module.exports = {
  reverseList,
};
