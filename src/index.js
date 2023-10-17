import _ from 'lodash'



function reverseQuicksort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let baseIndex = Math.floor(arr.length/2);
  const base = arr.splice(baseIndex, 1);
  const left = [];
  const right = [];
  for(let item of arr) {
    if(item < base) {
      right.push(item);
    } else {
      left.push(item)
    }
  }
  return reverseQuicksort(left).concat(base, reverseQuicksort(right))
}


function search(docs, target) {
  let keyWord = target.split(' ');
  const cloneDocs = [];
  for(let i = 0; i < docs.length; i++) {
    let clone = {};
    for(let prop in docs[i]) {
      clone[prop] = docs[i][prop];
    }
    clone.relevant = 0;
    cloneDocs.push(clone)
  }
  for(let key of keyWord) {
     cloneDocs.map((doc) => {
      const regex = new RegExp(`\\b${key}\\b`, 'gm');
      let text = doc.text;
      if(text.match(regex)) {
        doc.relevant += text.match(regex).length;
      }
      return text.match(regex);
    })
  }

  const filteredAllMatch = cloneDocs.filter((doc) => {
    if(doc.relevant !== 0) {
      return doc;
    }
  })
  // const filtereArr = docs.filter((doc) => {
  //   const regex = new RegExp(`\\b${keyWord}\\b/gm`);
  //   let text = doc.text
  //   return text.match(regex);
  // });
  // console.log(quicksort(filteredAllMatch.map((doc) => String(doc.id))))
  return reverseQuicksort(filteredAllMatch.map((doc) => String(doc.id)));
}

// const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
// const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
// const doc3 = { id: 'doc3', text: "I'm your shooter." };
// const docs = [doc1, doc2, doc3];

// console.log(search(docs, 'shoot'));

module.exports = search
