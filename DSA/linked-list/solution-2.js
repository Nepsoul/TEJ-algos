function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let startVal = head;
  let tail = head;
  let count = 0;

  while (count < n) {
    tail = tail.next;
    count++;
  }

  if (tail === null) {
    return head.next;
  }

  while (tail.next) {
    startVal = startVal.next;
    tail = tail.next;
  }
  startVal.next = startVal.next.next;
  return head;
};
