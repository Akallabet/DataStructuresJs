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
  describe('Insertion', () => {
    let inputValues
    beforeEach(() => {
      inputValues = [3, 5, 4, 10, 2, 1]
    })
    it('should insert the elements one by one', function() {
      inputValues.forEach(val => bst.insert(val))
      const orderedValues = bst.inOrder()
      expect(orderedValues[0]).to.equal(1)
      expect(orderedValues[1]).to.equal(2)
      expect(orderedValues[2]).to.equal(3)
      expect(orderedValues[3]).to.equal(4)
      expect(orderedValues[4]).to.equal(5)
      expect(orderedValues[5]).to.equal(10)
    })
    it('should insert the elements as an array', function() {
      const sortedInputValues = inputValues.sort((a,b) => a - b)
      bst.insert(inputValues)
      bst.inOrder().forEach((val, i) => expect(val).to.equal(sortedInputValues[i]))
    })
  })

  describe('Min & max values', () => {
    let inputValues, sortedInputValues
    beforeEach(() => {
      inputValues = [3, 5, 4, 10, 2, 1]
      sortedInputValues = inputValues.sort((a,b) => a - b)
      bst.insert([...inputValues])
    })
    it('should return the min value', function() {
      expect(bst.getMin()).to.equal(sortedInputValues[0])
    })
    it('should return the max value', function() {
      expect(bst.getMax()).to.equal(sortedInputValues[sortedInputValues.length - 1])
    })
  })
})
