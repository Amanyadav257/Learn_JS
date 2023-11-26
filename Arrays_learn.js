let fruits=[1,"Aman",3,"aaamm"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// method

// toString()
let ac=fruits.toString();
console.log(typeof(ac));

// join()
console.log(fruits.join(" -> "));

// pop()
console.log(fruits.pop(),fruits);

// push()
console.log(fruits,fruits.push("aka"));

// shift()
let r=fruits.shift();
console.log(r,fruits);

// unshift()
let r1=fruits.unshift(2);
console.log(r1,fruits);

// delete
console.log(fruits.length);
delete fruits[0];
console.log(fruits);
console.log(fruits.length);


// concat()
let a=[4,5,6];
let b=fruits.concat(a);
console.log(typeof(a));


// sort()
let a1=[9,2,0,1];
fruits.sort();
a1.sort();
console.log(fruits,a1);
console.log(typeof(a1[0]));

let compare=(a,b)=>{
    return b-a;
}
a1.sort(compare);
console.log(a1);

// reverse()
let a2=[2,3,7,1];
console.log(a2.reverse());


// splice()
let a3=[1,2,3,4];
a3.splice(2,1,10,20);
console.log(a3);


// slice()
let a4=[1,2,3,4];
let b1=a4.slice(2);
let c=a4.slice(0,-1);
console.log(b1,c);


// Loops
// forEach
let a5=[1,2,3];
a5.forEach((el)=>{
console.log(el);
})

// Array.form()

let name="AMAN"
let arr1=Array.from(name);
console.log(arr1);

// map()
let a6=[1,2,3,4];
let arr2=a6.map((value)=>{
    console.log(value);
    return value + 1;
})
console.log(arr2);

// filter()
let a7=[1,2,3,4];
let arr3=a7.filter((value)=>{
    return value < 3;
})
console.log(arr3);

// reduce()
let a8=[1,2,3,4,5];
let arr=a8.reduce((h1,h2)=>{
    return h1 + h2;
})
console.log(arr);

