const arr = [
    "Kalpesh",
    "Mayur" ,
    "Aryan",
    "Hemant",
    "Kartik",
    "Nikhil",
    "Sujal"
];

const List = document.createElement("ol");

arr.forEach((item) =>{
    const l =document .createElement("li");
    l.textContent=item;
    list.appendChild(1);

});

document.getElementById("myList").appendChild(List);
