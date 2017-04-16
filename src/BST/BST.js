import BSTNode from './BSTNode'

function BST () {
	let root, min, max
	const list = []
	const resetList = () => list.length = 0
  const createRoot = (node) => {
  	root = node
    return root
  }
  const err = (message) => console.log(message)
	const adjust = () => {}

	function insert (node, parent = root) {
  	if (!root) return createRoot(node)
		if (node.val === parent.val) return node
    const direction = node.val < parent.val ? 'left' : 'right'
    if (parent[direction]) return insert(node, parent[direction])
    else {
			parent[direction] = node
	    node.parent = parent[direction]
	    return node
		}
  }
  function startInsert (values) {
		if (!Array.isArray(values)) values = [values]
  	values.forEach((val) => insert(BSTNode({val})))
    adjust()
  }

	function inOrder (node) {
		if (node.left) inOrder(node.left)
		if (node) list.push(node.val)
		if (node.right) inOrder(node.right)
	}
	function startInorder () {
		resetList()
		inOrder(root)
		return list
	}

	function getMin(node = root) {return node.left ? getMin(node.left) : node.val}
	function getMax(node = root) {return node.right ? getMax(node.right) : node.val}

  return {getRoot : () => root, getMin, getMax, insert: startInsert, inOrder: startInorder}
}

export default BST
