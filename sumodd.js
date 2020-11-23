function oddball_sum(nums) {
   let sum = 0
   for (let i = 0; i < nums.length; i++) {
      if (num[i] % 2 == 1) sum += num[i]
   }
   return sum
}

function oddball_sum_reduce(nums) {
   return nums.filter(num => num % 2 !== 0).reduce((accu, val) => accu + val)
}

let num = [21, 44, 37, 48, 33, 95, 211]
console.log(oddball_sum_reduce(num))
console.log(oddball_sum(num))