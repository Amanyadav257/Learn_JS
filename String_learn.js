let str=`this 'is' "Aman" `;
console.log(str);

// String interpolation
let name="aman";
let a=`this is ${name}`;
console.log(a);

// methods

// length
let a1="Aman";
console.log(a1.length);

// toUpperCase()
let a2="aman";
console.log(a2.toUpperCase());

// toLowerCase()
let a3="AMAN";
console.log(a3.toLowerCase());

// Slice()
let a4="AMAN";
console.log(a4.slice(1,3));

// replace()
let a5="Aman";
let a6=a5.replace("m","M");
console.log(a6);

// concat()
let a7="Aman";
let a8=" Yadav";
let a9=a7.concat(a8);
console.log(a9);

// trim()
let a10="  AMan  ";
console.log(a10);
console.log(a10.trim());