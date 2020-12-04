function lucky_sevens(arr) {
  
   // if less than 3 elements then this challenge is not possible
   if (arr.length < 3) {
     return "not possible";
   }
   
   let total = 0
   for (let i = 2; i < arr.length; i++) {
      if (arr[i] + arr[i-1] + arr[i-2] == 7) {
         return true
      }
   }
   return false
 }
 
 console.log(lucky_sevens([2, 0, 1, 3, 3]))