
//window me add hota hai
//function scoped hota hai
//we can declare var by same name again and it gives no error

var a = 14;
var a = 144;


//we can declare and intialize it only once in a program
let k = 12;


//this remains same(constant) in all over program
const aa = 12;




// dynamic typing in javascript
let kal = 13;
kal = true;
kal = [];
kal = "dynamic typing";
console.log(kal);


//ternary operator

112>14 ? console.log("true comparison") : console.log("false comparison")




// var is only functioned scoped , no matters it again declared inside the block scoped
var z = 12;
{
    var z= 24;
}
console.log(z);


let az= 5;
let n="Kalpesh";
console.log(a);
console.log(n);

sum(15,10)

function sum(x,y)
{
    let c = x+y;
    console.log(c);
}
sum(5,10)

function f1(a,b,c){
    return a+b-c;
}

let answer= f1(5,6,7);
console.log(answer)


let answer2= f1(15,6,7);
console.log(answer)
