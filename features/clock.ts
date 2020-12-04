class Clock {
   hour: number
   minute: number

   constructor(hour: number, minute: number) {
      this.hour = hour
      this.minute = minute
   }

   addMin(duration: number) {
      let hourPassed: number = 0

      if (duration > 60) {
         let castMin = duration % 60

         for(; duration / 60 > 1; hourPassed++, duration -= 60){}

         if (this.minute + castMin > 60) {
            hourPassed++
            this.minute = this.minute + castMin % 60 - 60
         }
         else this.minute = this.minute + castMin
         if (this.hour + hourPassed > 24) {
            console.log("Next day.")
            return
         }
         else this.hour = this.hour + hourPassed
      }
      else {
         let castMin = duration % 60

         if (this.minute + castMin > 60) {
            this.hour++
            this.minute = this.minute + castMin % 60 - 60
         } 
         else this.minute = this.minute + castMin
         if (this.hour + hourPassed > 24) {
            console.log("Next day.")
            return
         }
         else this.hour = this.hour + hourPassed
      }

   }

   subtractMin(duration: number) {

   }
}

let time = new Clock(12, 15)
console.log(`Current time: ${time.hour}:${time.minute}`)
time.addMin(647)
console.log(`Added time: ${time.hour}:${time.minute}`)