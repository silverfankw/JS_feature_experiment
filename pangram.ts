let sentences: string[] = [
   "The quick brown fox jumps over the lazy dog",
   "Sphinx of black quartz, judge my vow",
   "I am a boy",
   "Jim quickly realized that the beautiful gowns are expensive."
];

function pangramCheck(sentence) {
   // Remove space
   sentence = sentence.replace(/\s+/g, "").toLowerCase();

   let validator: Map<number, boolean> = new Map();

   // Init map
   for (let i = 97; i <= 122; i++) {
      validator.set(i, false);
   }

   // Construct map
   for (let i = 0; i < sentence.length; i++) {
      validator.set(sentence.charCodeAt(i), true);
   }

   // check if every ascii code between 97 - 122 are true
   const result = [...validator.entries()].every((pair) => pair[1] == true);
   console.log(result);
   return result;
}

sentences.map((sentence) => pangramCheck(sentence));

