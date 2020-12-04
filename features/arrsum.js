function withReduce(arr) {
   return arr.reduce((accu, val) => accu.concat(val)).reduce((accu2, val2) => accu2 + val2)
}

function wOutReduce(arr) {
   let sum = 0
   for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]))  arr[i].forEach(element => sum += element)
      else  sum += arr[i]
   }
   return sum
}

const arr = [[7, 4, 19], [3, 2], [4, 6], [8]]

const result2 = wOutReduce(arr)
console.log(result2)

const result = withReduce(arr)
console.log(result)
