const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};

function treeSum(node) {
  let sum = node.value;
  for (const child of node.children) {
    sum += treeSum(child);
  }
  return sum;
}

console.log(treeSum(tree));