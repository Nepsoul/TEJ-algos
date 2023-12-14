var isValidBST = function (root) {
  let stack = [];
  let max = null;
  let min = null;

  stack.push({ node: root, max, min });
  while (stack.length > 0) {
    let curNode = stack.pop();

    if (curNode.min !== null && curNode.min >= curNode.node.val) {
      return false;
    }

    if (curNode.max !== null && curNode.max <= curNode.node.val) {
      return false;
    }

    if (curNode.node.right) {
      max = curNode.max;
      min = curNode.node.val;
      stack.push({ node: curNode.node.right, max, min });
    }
    if (curNode.node.left) {
      max = curNode.node.val;
      min = curNode.min;
      stack.push({ node: curNode.node.left, max, min });
    }
  }
  return true;
};
