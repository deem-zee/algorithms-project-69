function search(docs, keyWord) {
    const filtereArr = docs.filter(doc =>{ 
        let regex = new RegExp('\\b' + keyWord + '\\b');
        return doc.text.match(regex);
    });
    return filtereArr.map(doc => String(doc.id));
}

const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

const result = search(docs, 'shoot');
console.log(result)