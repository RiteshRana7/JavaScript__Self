// let fruits = ["Mango","Litchi", "Grapes", "Banana","Orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// let num = [10,20,30,40,50];

// for(let val of num){
//     console.log(val);
// }

// let marks = [60,65,56,59,67,53];

// sum = 0;
// for(let val of marks){
//     sum += val;
// }
// average = sum / marks.length;
// console.log(`student  average marks of ${average}`);

// let fooditems = ["Litchi","Mangos","Potato","Tomato"];
// fooditems.pop();
// console.log(fooditems);
// fooditems.push("Graps","Papaya","Orange");
// console.log(fooditems);


// let firstName = ["Ritesh","vishal","Raju","parkash"];
// let lastName = ["Rana","Bhadwar","Singh","Bhai"];

// Fullname = firstName.concat(lastName);
// console.log(Fullname);

// let firstName = ["Ritesh","vishal","Raju","parkash"];
// firstName.unshift("Rudra","Rohit");
// console.log(firstName);

// let number = [50,60,40,60,69,59,];
// number.unshift(10,20,30,40)
// console.log(number);

// let num = [1,2,3,4,5];
//  value = num.slice(1,3);
// console.log(value);
// let name = ["Rahul","nitin","Munna","Rohit","Raju","mohan"];
// val = name.slice(1,4);
// console.log(name);
// console.log(val);

// let fruits = ["Manog","litchi","Graps","Orange"];
// let price = [60,70,100,40];
// let fruitsPrice = fruits.concat(price);

// console.log(fruitsPrice);

// let God = ["Ram","Mahadev","Laxman","Hanuman"];
// let hero = ["Thor","Spiderman","Krish"];
// let name =["Ritesh","Vishal","Nitin","Ganesh"];
// let allCombine = God.concat(name, hero);
// console.log(allCombine);


// Function in js .......

//  function myFunction(){
//     console.log("Welcome to javaScript !");
//     console.log("I Learn in javaScript");
//     console.log("I sarted function in javaScript");
// }
// myFunction();

// function theFunction(msg){
//     console.log(msg);
// }
// theFunction("I love javaScript");

// function sum(x,y){
//     add = x,y;
//     return add;
// }
// let value = (3,5);
// console.log(value);

// function PrintSum(a,b){
//     s = a,b;
//     return s;
// }
// val = 40 + 10;
// console.log(val);

// Sum in Arrow function => .........

// const arrowSum = ( a,b) =>{
//     console.log(a+b);
// }   

// multiplication in arrow function => ......
// const arrowMul = (x,y) => {
//     console.log(x*y)
// }
// console.log(arrowMul);

function countVowls(str){
    let count = 0;
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char ==="0" ||char ==="u"){
            count++;
        }
    }
    console.log(count);
}
