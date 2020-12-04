function divisibleByThree(low, high) {
   for (let i = low; i < high; i++) {
      if (i % 3 == 0) console.log(`${i} div3`)
      else console.log(`${i}`)
   }
}

divisibleByThree(20, 70)