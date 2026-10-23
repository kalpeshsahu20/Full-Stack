function showalert(){
    alert("Click me button clicked using HTML events");
}
document.getElementById("click-button").
addEventListener("click",showalert2);

function showalert2(){
    alert("Click me button  clicked using JS EVENTS")
}

document.getElementById("box").addEventListener("click",()=>{
    document.getElementById("box").innerText="The box was clicked by the user"
});


document.getElementById("movePointer").addEventListener("mouseover",()=>{
    document.getElementById("movePointer").innerText="Pointer is over a paragraph......................."
});

document.getElementById("pointerUP").addEventListener("mouseup",()=>{
    document.getElementById("pointerUP").innerText="Hii!! This is Kalpesh Sahu......................."
});

document.getElementById("pointerDown").addEventListener("mousedown",()=>{
    document.getElementById("pointerDown").innerText="Pointer is over a paragraph......................."
});

document.getElementById("nameSubmit").addEventListener("click",()=>{
   console.log(document.getElementById)
});