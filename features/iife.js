const iife = (() => {
   let private = 0

   return {
      accessPrivate: function ()  {return private},
      increPrivate: function (inc)  {
         private = private + inc}
   }
})()

iife.increPrivate(333)
iife.increPrivate(28)
console.log(iife.accessPrivate())