const obj = {"a": {"b": 1}, "c":4}

// Object.freeze(obj)

const superFreeze = obj => {
   console.log(obj)
   Object.values(obj).forEach(nestedValue => {
      superFreeze(nestedValue)
   })
   Object.freeze(obj)
}

superFreeze(obj)
obj.a.b = 5
console.log(obj)