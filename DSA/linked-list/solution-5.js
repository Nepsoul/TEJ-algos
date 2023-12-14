var mergeTwoLists = function (list1, list2) {
  let head;
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }
  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  let curNode = head;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curNode.next = list1;
      curNode = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      curNode = list2;
      list2 = list2.next;
    }
  }
  if (list1 === null) {
    curNode.next = list2;
  } else {
    curNode.next = list1;
  }
  return head;
};
