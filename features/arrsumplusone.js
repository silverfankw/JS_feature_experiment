function addOneToEachArrayElem(arr) {
   return arr.map(elem => elem+1).reduce((accu, val) => accu + val)
}

const arr = [33, 75, 14, 43]
console.log(addOneToEachArrayElem(arr))