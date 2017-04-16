import BST from './BST/BST'

const bst = BST()
bst.insert(5)
bst.insert(3)
bst.insert(4)
bst.insert(10)
bst.insert(2)
bst.insert(1)

// document.querySelectorAll('p.result')[0].innerHTML = bst.getRoot().val
console.log(bst.getRoot().val)
