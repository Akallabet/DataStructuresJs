import BST from './BST'

describe('BST', function() {
  let bst, inputValues
  beforeEach(() => {
    bst = BST('key')
    inputValues = [
      {key: 3, val: 3},
      {key: 5, val: 5},
      {key: 4, val: 4},
      {key: 10, val: 10},
      {key: 2, val: 2},
      {key: 1, val: 1}
    ]
  })
  it('should return the root value', function() {
    bst.insert({key: 3, val: 3})
    expect(bst.getRoot().val).to.equal(3)
  })
  describe('Insertion', () => {
    it('should insert the elements one by one', function() {
      inputValues.forEach(val => bst.insert(val))
      bst.inOrder()
      expect(bst.data[0].val).to.equal(1)
      expect(bst.data[1].val).to.equal(2)
      expect(bst.data[2].val).to.equal(3)
      expect(bst.data[3].val).to.equal(4)
      expect(bst.data[4].val).to.equal(5)
      expect(bst.data[5].val).to.equal(10)
    })
    it('should insert an array of elements', function() {
      const sortedInputValues = [...inputValues].sort((a,b) => a.key - b.key)
      bst.insert(inputValues)
      bst.inOrder()
      bst.data.forEach(({val}, i) => expect(val).to.equal(sortedInputValues[i].val))
    })
  })

  describe('Min & max values', () => {
    let sortedInputValues
    beforeEach(() => {
      sortedInputValues = [...inputValues].sort((a,b) => a.key - b.key)
      bst.insert([...inputValues])
    })
    it('should return the min value', function() {
      expect(bst.getMin().val).to.equal(sortedInputValues[0].val)
    })
    it('should return the max value', function() {
      expect(bst.getMax().val).to.equal(sortedInputValues[sortedInputValues.length - 1].val)
    })
  })
})
