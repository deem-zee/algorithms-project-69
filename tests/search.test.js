const search = require('../src/index')
const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];




test('pass [] and keyWord = "shoot to equal []"', () => {
    expect(search([], 'shoot')).toEqual([])
})

test('pass docs and keyWord = "shoot to equal [doc2, doc1]"', () => {
    expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1'])
})