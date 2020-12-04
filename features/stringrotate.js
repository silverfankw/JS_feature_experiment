function compareString(a, b) { 
  return a.length === b.length && a.concat(a).indexOf(b) != -1
}

const str1 = "afxe"
const str2 = "fxea"

console.log(compareString(str1, str2))