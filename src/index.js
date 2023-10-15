function search(docs, keyWord) {
  const filtereArr = docs.filter((doc) => {
    const regex = new RegExp(`\\b${keyWord}\\b`);
    let text = doc.text
    return text.match(regex);
  });
  return filtereArr.map((doc) => String(doc.id));
}

// const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
// const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
// const doc3 = { id: 'doc3', text: "I'm your shooter." };
// const docs = [doc1, doc2, doc3];

// console.log(search(docs, 'shoot'));

module.exports = search
