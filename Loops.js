//Loops
for(let a=0;a<10;a++){
    console.log(a);
}

const obj={
    harry: 30,
    aman: 23,
    rahul:80
}
console.log(obj.aman);
for(let a in obj){
    console.log(a + ":" + obj.a);
}

for(let a of "harry"){
    if(a == 'y'){
    console.log(a);
  }
}

const marks={
    harry: 90,
    shaubham: 56,
    lovish: 56,
    monika: 4
}

for(let i=0;i < Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//while loop
let a=0;
while(a < 10){
    console.log(a);
    a++;
}

//do while
do{
    console.log(a);
}while(a == 0);
