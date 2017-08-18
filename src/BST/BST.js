import {defaultCompare} from 'utils'
import BynaryNode from '../binary-node/binary-node'

/**
*Simple Binary Search Tree implementation in javascript ES6
*
**/

function BST (key = 'key', compare = defaultCompare) {
	let root, min, max
	const defaultKey = key
	const data = []
	function resetList () {data.length = 0}
  function createRoot (node) {
  	root = node
    return root
  }
  function err (message) {console.log(message)}
	function adjust () {}

	//Insert operation
	function _insert (node, parent = root) {
  	if (!root) return createRoot(node)
		const comparedNodes = compare(node, parent)
		if (comparedNodes === 0) return node
    const direction = comparedNodes === -1 ? 'left' : 'right'
    if (parent[direction]) return insert(node, parent[direction])
    else {
			parent[direction] = node
	    node.parent = parent[direction]
	    return node
		}
  }
  function startInsert (values) {
		if (!Array.isArray(values)) values = [values]
  	values.forEach(({val, ...args}) => {
			if (!args[key]) err (`You didn't define a key: '${key}'`)
			else _insert(BynaryNode({val, ...args}))
		})
    adjust()
  }

	function _inOrder (node) {
		if (node.left) inOrder(node.left)
		if (node) data.push(node)
		if (node.right) inOrder(node.right)
	}
	function startInorder () {
		resetList()
		_inOrder(root)
	}

	function getMin(node = root) {return node.left ? getMin(node.left) : node}
	function getMax(node = root) {return node.right ? getMax(node.right) : node}

  return {getRoot : () => root, getMin, getMax, insert: startInsert, inOrder: startInorder, data}
}

export default BST
