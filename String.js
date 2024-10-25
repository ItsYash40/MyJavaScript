// String is immutable, so we cann't change String
console.log("I'm learning String in JS")

let a="Yash";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

console.log(a.length)


let d="Yash";
let e="Saptak";
console.log("His name is "+d+" and his friend name is "+e)
console.log(`His name is ${d} and his friend name is ${e}`) // USING BY  " ` "=> Backtic

let f="Atomic Habits"
console.log(f.toUpperCase())
console.log(f.toLowerCase())
console.log(f.length)
console.log(f.slice(2,10))

console.log(f.replace("At", "h9"))
console.log(f.concat(a, "Dev"))