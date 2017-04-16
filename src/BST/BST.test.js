import BST from './BST'

describe('BST', function() {
  let bst
  beforeEach(() => {
    bst = BST()
  })
  it('should return the root value', function() {
    bst.insert(3)
    expect(bst.getRoot().val).to.equal(3)
  })
})
