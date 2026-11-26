const ary = ["Apple",2.5,99,"Himachal","a"];

ary.forEach((element)=>{
    console.log(element);
})

const arr = ["Apple",2.5,99,"Himachal","a"];
var F = arr.filter((item)=> item!==99);

console.log("F=",arr)


const arr3 = [2,25,1,17,9,0];

var s = arr3.sort();

console.log("Sorting=",s);


let arr1 = [10, ,12,224,35,57,8,20, 30, 40, 50];

let max = arr1[0];
let min = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }

    if (arr1[i] < min) {
        min = arr1[i];
    }
}

console.log("Maximum:", max);
console.log("Minimum:", min);
