var maxDepth = function (root) {
  if (root === null) return 0;

  const stack = [];
  const nodeCheck = [];
  let maxLength = 0;
  stack.push(root);
  nodeCheck.push(1);

  while (stack.length > 0) {
    const node = stack.pop();
    const currDepth = nodeCheck.pop();

    if (currDepth > maxLength) {
      maxLength = currDepth;
    }

    if (node.left) {
      stack.push(node.left);
      nodeCheck.push(currDepth + 1);
    }
    if (node.right) {
      stack.push(node.right);
      nodeCheck.push(currDepth + 1);
    }
  }
  return maxLength;
};
