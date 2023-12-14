var isPalindrome = function (head) {
  let initialNode = head;
  let reverseNode = null;
  while (head) {
    let newNode = new ListNode(head.val);
    newNode.next = reverseNode;
    reverseNode = newNode;
    head = head.next;
  }
  while (initialNode && reverseNode) {
    if (initialNode.val === reverseNode.val) {
      initialNode = initialNode.next;
      reverseNode = reverseNode.next;
    } else if (initialNode.val !== reverseNode.val) {
      return false;
    }
  }
  return true;
};
