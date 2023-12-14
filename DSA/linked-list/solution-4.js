var hasCycle = function (head) {
  let slowPoiner = head;
  let fastPoiner = head;

  while (
    slowPoiner !== null &&
    fastPoiner !== null &&
    fastPoiner.next !== null
  ) {
    slowPoiner = slowPoiner.next;
    fastPoiner = fastPoiner.next.next;

    if (slowPoiner === fastPoiner) {
      return true;
    }
  }
  return false;
};
