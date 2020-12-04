const validator = new Map()

function uniqueElement(arr) {
   arr.forEach(element => {
      if (validator.has(element)){
         validator.set(element, true)
      }  else {
         validator.set(element, false)
      }
   });
  return [...validator.keys()]
}

const arr = [2, 2, 2, 2, 1, 8, 4 , 15, 4, 37, 22]
console.log(uniqueElement(arr))