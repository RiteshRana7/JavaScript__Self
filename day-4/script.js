 // practice of array 

// let name = ["Ritesh","Khushi", "Ayush","Nishuu"];
// console.log(name); 

// let marks = [73,94,78,65];
// console.log(marks);


// console.log (name[1]);

// name[2] = "Nitin";
// console.log(name);



// loop in array.....
// let name = ["Ritesh","Khushi", "nitin", "Kunal", "Mauuu"];

// for(let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

// q2

// let marks = [59,69,75,86,48,58,79,59,76,];

// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }

//  array in for of  lopp ...........

// let name = ["Rahul", "Rishu", "Kabir", "Monu", "Nayna"];

// for(let i = 0; i<name.length ; i++){
//     console.log(name[i]);
// }


// let name = ["Rahul", "Rishu", "Kabir", "Monu", "Nayna"];

// for(let hero of name){
//     console.log(hero);
// }


// let age = [16,18,19,22,25];

// for(let i = 0; i <age.length ;i++){
//     console.log(i);
// }
// console.log(age[3]);
// age[22] = 30;

// console.log(age);

// practice questuion in Array............

let marks =  [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum += val;
    
}
let avrage = sum / marks.length;
console.log(avrage);
