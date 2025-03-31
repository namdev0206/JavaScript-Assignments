//Quesion => 1
let marks = 35;
let grade;
switch (true) {
  case marks >= 41 && marks <= 50:
    grade = "A";

    break;

  case marks >= 31 && marks <= 40:
    grade = "B";

    break;

  case marks >= 21 && marks <= 30:
    grade = "C";

    break;

  case marks >= 11 && marks <= 20:
    grade = "D";

    break;

  case marks >= 0 && marks <= 10:
    grade = "E";

    break;

  default:
    grade = " invalid marks";
    break;
}
console.log(grade);





//Quesion => 2
let inputChar = prompt("Enter a character: ");

if (inputChar === 'p') 
    {
    console.log("PrepBytes");
} else if (inputChar === 'z') 
    {
    console.log("Zenith");
} else if (inputChar === 'e') 
    {
    console.log("Expert Coder");
} else if (inputChar === 'd') 
    {
    console.log("Data Structure");
} else 
{
    console.log("Character not found in table");
}





//Quesion => 3
let a1 =  prompt("Enter 1st Num : ");
let b1 = prompt("Enter 2nd Num : ");
let c1 = prompt("Enter 3rd Num : ") ;
 if(a1 >= b1 && a1 >= c1){
    console.log(a1);

 }
 else if(b1 >= a1 && b1 >= c1){
    console.log(b1);

 }
 else{
    console.log(c1);

 }





//Quesion => 4
let a2 =  prompt("Enter 1st Num : ");
let b2 = prompt("Enter 2nd Num : ");
let c2 = prompt("Enter 3rd Num : ") ;

if(a2 > b2 && a2 < c2){
        console.log(a2);

     }
     else if(b2 > a2 && b2 < c2){
        console.log(b2);

     }
     else{
        console.log(c2);

     }






//Quesion => 5
var a3 = 20;
var b3 = 200;
var c3 = 20;
var res = a3 + b3 + c3;
if (res >= 90) {
  console.log("An Obtuseangle");
} 
else
{
  console.log("Right Angle");
}