

$( () => {
   const result = $("#result")

   const arr = [ [3, 4,5],2 ,[1, [3]]]
   console.log(_.flattenDeep(arr))
   result.text(_.flattenDeep(arr))
})