const a = {
   aa: "This is a.",
   func: () => console.log(this)
}

const a2 = {
   aa2: "this is a2.",
   func: num => console.log(this)
}

const b = {
   bb: "This is b.",
   func: function() {console.log(this)}
}

a.func()
b.func()
a2.func()