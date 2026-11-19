
for(let i =1;i<20;i++)
{
    if(i%2 ===0){
    console.log(i);
    }
    
}

let i =1;
while(i<16){

    if(i%2===1){
        console.log(i);
    }
    i++;
}


let count = 0 ;
for(let i =0;i<101;i++){
    count +=i;
}
console.log(count);

for(let u =0;u<51;u++)
    {
        if(u%3===0)
    {
        console.log(u);
    }
}


for(let a =0;a<20;a++)
{
    if (a%3===0)
    {
        continue;
    }
    console.log(a);
}


let a = -986761;
let counter = 0; 

if(a===0){

    counter =1;
    
}

else if(a<0){

    a=-a;
}
 
    while(a>0)
{
    a = Math.floor(a/10);
    counter++;
    // a--; no need beacause the functions already made the digit decrement by one on evry  step
     
}










console.log(counter);



