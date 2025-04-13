//Q => Count Characters
function countCharacters(word){
    let arr = [0,0];
    for(let char of word){
        if(char == 'A'){
            arr[0]++;
        }else if(char == 'D'){
            arr[1]++;
        }
    }
    return arr;
}
let str = 'GFSGHJNCVXASF';
console.log(countCharacters(str))



//Q => Count Heads
function CountHead(S) {
    let frequency = {};
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    let result = '';
    let sortedKeys = Object.keys(frequency).sort();
    for (let key of sortedKeys) {
        if (frequency[key] > 1) {
            result += key + frequency[key];
        }
    }
    return result;
}
let shbd = "prepbytes";
console.log(CountHead(shbd));




//Q => Count vowels
function countVowels(str){
    let count = 0;
    let vowelsUppercase = ['A','E','I','O','U']
    let vowelsLowercase = ['a','e','i','o','u']

    for(let char of str){
        if(vowelsUppercase.includes(char) || vowelsLowercase.includes(char)){
            count++
        }
    }
    return count;
}
let s = 'prepbytese'
console.log('number of vowels are:', countVowels(s));



//Q => Concatenate
let s1 = 'small'
let s2 = 'world'
const concatenate = s1 + s2
console.log(concatenate)



//Q => Find Length
function findLength(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        count++
    }
    return count;
}
console.log(findLength("delhi"));




//Q => Find Winner
function winner(str){
    let countA = 0
    let countD = 0

    for(let i=0; i<str.length; i++)
        {
        if(str[i] == "A")
            {
            countA++
        }else if(str[i] == 'D')
            {
            countD++
        }
    }

    if(countA == countD){
        console.log('Hello')
    }else if(countA > countD){
        console.log('I am the winner')
    }else{
        console.log('Loser is the winner')
    }
}
let win = 'AAADDDAD'
winner(win)




//Q => Join Strings
function joinStrings(str1, str2)
{
    let concatenate = str1 + str2
    return concatenate
}
let str1 = "Royal"
let str2 = "World"
console.log(joinStrings(str1,str2))




//Q => Palindrome
function palindromeCheck(str)
{
    let cleanStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    let revStr = cleanStr.split('').reverse().join('');
    return cleanStr === revStr;
}
let x = 'Racecar'
console.log(palindromeCheck(x))



//Q => Reverse String
let names = 'Nikhil';
let reversedName = names.split('').reverse().join('')
console.log(reversedName)




//Q.10 Match the String
let word1 = 'panchal'
let word2 = 'panchal'

if(word1 == word2)
    {
    console.log('yes')
    }else
    {
    console.log('no')
    }




//Q => String Replace
let para = 'Hi, you Delhi. You Prepbytes.'
console.log(para.replace('you. You ', ''))




//Q => Split the String
let S = "I am nikhil panchal";
let words = S.split(' ');

for (let word of words) 
    {
        console.log(word);
    }




//Q => Count Vowels & Consonents
function countConsonents(str){
    let count = 0;
    for(let char of str){
        if(/[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)){
            count++;
        }
    }
    return count;
}
let word = 'prepbytes';
let vow = countVowels(word)
let cons = countConsonents(word)
console.log(vow,cons)