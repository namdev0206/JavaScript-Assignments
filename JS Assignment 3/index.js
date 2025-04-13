//Q1
// * 
// * * 
// * * *  
// * * * *
// * * * * *
for (let i = 1; i <=5; i++) {
    let patten = "";
     for (let j = 1; j <=i; j++) {
         
         patten+="*";
         
     }
     console.log(patten);
     
 }
 

 //Q2
 // Iterate through all numbers from 1 to 45. Print the following:
 //    For multiples of 3 print “Fizz”
 //    For multiples of 5 print “Buzz”
 //    For multiples of 3 and 5 print “FizzBuzz”
 for (let index = 1; index <= 45; index++) {
     
     if(index%3==0){
         console.log("Fizz",index);
         
     }else if(index%5==0){
         console.log("Buzz",index);
         
     }else if(index%5==0 && index%3==0){
         console.log("FizzBuzz",index);
     }    
 }
 


 //Q3. Calculate the sum of all the numbers in the following array
 var numbersArray = [1,13,22,123,49];
 var sum = 0;
 for (let index = 0; index < numbersArray.length; index++) {
     let val = numbersArray[index];
     sum+=val;
     // console.log(sum);
     
 }
 console.log(sum);
 

 //Q4. Get the sum of two arrays…actually the sum of all their elements.
 // P.S. Each array includes only integer numbers. Output is a number too.
 // let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
 // let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // 
 //  Example output: 
 //  276 + 351 = 627
 let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
 let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
 let first_arr_count = 0;
 for (let index = 0; index < arr_1.length; index++) 
    {
    first_arr_count+=arr_1[index];

    }
 
    let second_arr_count = 0;
 for (let j = 0; j < arr_2.length; j++) 
    {
     second_arr_count+=arr_2[j];
    }
 console.log("both array sum:",first_arr_count+second_arr_count);
 

 
 // Q5.Using a for loop output the elements in reverse order
 // let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
 //   Example output: 
 //   true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line
 let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
 for (let k = arr.length-1; k > 0 ; k--) 
    {
     console.log(arr[k]);
    }