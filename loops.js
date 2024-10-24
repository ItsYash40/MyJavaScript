let a=1;
console.log(a)
console.log(a+1)
console.log(a+2)

// to get a large number use in loop
for(let i=0; i<100; i++){
   console.log(a+1)
}

//For loop use ...
let obj={
    name: "Yash",
    course: "Btech CSE",
    company: "Gen AI"
}

for (const key in obj) {   //Short cut => forin
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

for (const c of "Venus") {
    console.log(c)
}

//While loop use

// let i=0;
// while(i<5){
//     console.log(i)
//     i++;
// }

let i=0;
do {
    console.log(i)
    i++;
} while (i<5);