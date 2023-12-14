var isSymmetric = function (root) {
  let leftStack = [];
  let rightStack = [];

  leftStack.push(root.left);
  rightStack.push(root.right);

  while (leftStack.length > 0 || rightStack.length > 0) {
    let node1 = leftStack.pop();
    let node2 = rightStack.pop();

    if (node1 && node2) {
      if (node1.val !== node2.val) {
        return false;
      }
      leftStack.push(node1.left);
      leftStack.push(node1.right);

      rightStack.push(node2.right);
      rightStack.push(node2.left);
    }

    if ((node1 && !node2) || (!node1 && node2)) {
      return false;
    }
  }

  return true;
};
