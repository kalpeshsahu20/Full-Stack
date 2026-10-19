function add(a,b){
    let x= a+5;
    let y= b+5;
    console.log(x+y);
}



function sum(m ,n,jor){
    let p=m*2;
    let q=n*2;

    jor(p,q);
}

sum(5,6,add);

// answer 32

// const coursediv = document.getElementById("cousrse");
// console.log(coursediv);
// const.log (coursediv);

// const heading = DocumentFragment.querySelector("h2");

// console.log(heading);


// console.log(heading.parentElement.firstElementChild);
// console.log(headinng.parentElement.children);