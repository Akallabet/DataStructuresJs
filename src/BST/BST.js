import BSTNode from './BSTNode'

function BST () {
	let root, min, max
  const createRoot = (node) => {
  	root = node
    return root
  }
  const err = (message) => console.log(message)
  const setMin = (node) => {min = (!min || min.val < node.val) ? min : node}
  const setMax = (node) => {max = (!max || max.val > node.val) ? max : node}
  const setHeight = (node, height) => {}
  const insertNode = (node, parent, direction) => {
    parent[direction] = node
    node.parent = parent[direction]
    setMin(node)
    setMax(node)
    setHeight(parent, 1)
    return node
  }
	const insert = (node, parent = root) => {
  	if (!root) return createRoot(node)
    const direction = node.val < parent.val ? 'left' : 'right'
    if (parent[direction]) return insert(node, parent[direction])
    if (!parent[direction]) return insertNode(node, parent, direction)
  }

  const adjust = () => {}

  const insertBSTNode = (val) => {
  	insert(BSTNode({val}))
    adjust()
  }

	const printInorder = () => {

	}

  return {getRoot : () => root, getMin: () => min, getMax: () => max, insert: insertBSTNode, }
}

export default BST
