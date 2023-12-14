var levelOrder = function (root) {
  let queue = [];

  if (!root) return queue;

  let resultQueue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelQueue = [];
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      levelQueue.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    resultQueue.push(levelQueue);
  }
  return resultQueue;
};
