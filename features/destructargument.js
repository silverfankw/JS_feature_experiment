const obj = {
   height: 30,
   width: 20,
   length: 44
}

const {height, ...rt} = obj
console.log(rt)