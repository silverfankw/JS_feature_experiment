
function reverseString(str, seperator) {
  return str.split(seperator).reverse().join(seperator)
}

const str = "Welcome to this Javascript Guide!"

const trsfm1 = reverseString(str, "")
console.log(trsfm1)
const trsfm2 = reverseString(trsfm1, " ")
console.log(trsfm2)