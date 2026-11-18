

//function statement
function add(a=0,b=0)  //parameters
{
    console.log(a+b);  // this are arguments
}


add(10,20);


//function expression
let sum =function(a=0,b=0)
{
    console.log(a+b);
}


sum(110,220);


//fat-arrow function

let a = (a,b)=>{
    console.log(a-b);
}

a(50,20);


let aa = function(...val){    //this is called resting
    console.log(val);
}

aa(1,354,345,4688,87,5,224,546,7,365,36)


function fn(a)
{
    return(a+10);  //return

}

let c= fn(90);
console.log(c);





