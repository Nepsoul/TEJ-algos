var sortedArrayToBST = function (nums) {
  let root = new TreeNode(null);
  let stack = [{ node: root, leftIdx: 0, rightIdx: nums.length - 1 }];

  while (stack.length > 0) {
    let { node, leftIdx, rightIdx } = stack.pop();
    let mid = Math.floor((leftIdx + rightIdx) / 2);
    node.val = nums[mid];

    if (mid + 1 <= rightIdx) {
      node.right = new TreeNode(null);
      stack.push({ node: node.right, leftIdx: mid + 1, rightIdx });
    }
    if (mid - 1 >= leftIdx) {
      node.left = new TreeNode(null);
      stack.push({ node: node.left, leftIdx, rightIdx: mid - 1 });
    }
  }
  return root;
};
