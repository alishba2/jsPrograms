// 1
console.log("Question no 1");
console.log("Only Print numbers");
const SampleArray = [ 0, 15, false , -22 , 'undefined', 47,null ];

const onlyNumbers = SampleArray.filter(
    element => typeof element === "number"
);
console.log(onlyNumbers);


// 2
console.log("Question no 2")


var library = [

    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 
    ];
    for(let i=3; i>=0; i--){
     console.log(library[i]);
 
    }
  


// 3
console.log("Question no 3");
console.log("Print random elemens of array");
const arr = [1,2,'three','four'];
console.log (arr[Math.floor(Math.random() * arr.length)]);


// 4
console.log("Question no 4");
console.log("removing repeated elements of array")
let array = [1,2,3,4,4,3];

// function to check even numbers
function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}


getUnique(array);

// 5

// Q) Write a JavaScript program to find the leap years in a given range of years. 
console.log("Question no 5");
console.log("Printing leap years between 2000 to 2020");
var leapyear;

for(let i=2000; i<=2020; i++){
        if(i%4 == 0){
            console.log(i + " is a leap year");
        }
}

// 6
// Q) Write a JavaScript program to compute the union of two arrays.
// Sample Data :

// console.log(union([1, 2, 3], [100, 2, 1, 10]));

// [1, 2, 3, 10, 100]
console.log("Question no 6");
console.log("Union of arrays")
const ar1 = [ 1,2,3];
const ar2 = [100, 2,1,10];
const result = ar1.concat(ar2);
console.log(result);

// 7
// Q) Write a JavaScript program to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number. 

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3
console.log("Question no 7");
console.log("pair that is equal to 50")
let i;
let j;
var numbers = [10,20,10,40,50,60,70];
for(i=0; i<=numbers.length; i++){
    for(j=i+1; j<= (numbers.length)-1 ; j++){
            if((numbers[i] + numbers[j]== 50)){
                console.log(numbers[i] +", "+ numbers[j]);
                
            }
    }
}
// 8
// Q) Write a method that splits an array into parts of determined size

//    Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// SOLUTION
console.log("Question no 8");
const SpliceArray = [1,2,3,4,5];
console.log(SpliceArray.splice(0,2));
console.log(SpliceArray.splice(0,2));
console.log(SpliceArray.splice(0,1));

// 8
console.log("Question no 8");
// Q) Write a function to determine if the given value is palindrome or not

const strng = 'mada';

var len = strng.length;

for(let i=0; i<=len ; i++){
    if(strng[i] == strng[len - 1]){
        console.log("palindrome value");
        break;
    }
    else{
        console.log("NOT PALINDROM");
        break;
    }
}

// 9
// Q) Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

console.log("Question no 9");

for(let i=0; i<=1000; i++){
    if((i%3==0)|| (i%5==0)){
        console.log(i);
    }
}

// 10

console.log("Question no 11");
function sumDigitSquare(n)
{
    let sq = 0;
    while (n > 0)
    {
        var digit = n % 10
        sq += digit * digit;
        n = Math.floor(n / 10);
    }
         
    return sq;
}


function isHappy(n){
    let s = [];
    s.push(n);
    while(true){
        if(n==1){
            return true;
        }
        n = sumDigitSquare(n);
        if(s.includes(n)){
            return false;
        }
        s.push(n);
        
    }
    return false;
}
let NO = 23;
let count = 0;
console.log("First 5 happy numbers");
for(let i=0; i<=100; i++){
    if(isHappy(i)==true){
        console.log(i);
        count++;
        if(count>=5){
            break;
        }
    }
}
// 11
// Q) Write a JavaScript function to split a string and convert it into an array of word
console.log("Question no 12");
var myString = "Spliting array";
var SplitString = myString.split("");
console.log(SplitString);


// Q) Creates a new array out of the two supplied by creating each possible pair from the arrays
console.log("Question no 10");
var Ar1 = [1,2,3,4];
var Ar2 = [5,6,7,8];
var Ar3 = [];

for(let i=0; i<Ar1.length;i++){
    for(let j=0; j<Ar2.length;j++){
        Ar3.push(Ar1[i]);
        Ar3.push(Ar2[j]);
    }
}
console.log(Ar3);



// Q) Write a JavaScript function to capitalize the first letter of each word in a string.
console.log("Question no 13");
var CString = "captilize first letter of an array";

var SplitString = CString.split(" ");
console.log(SplitString);
for(let i=0; i<SplitString.length;i++){
   SplitString[i]= SplitString[i].charAt(0).toUpperCase() + SplitString[i].slice(1);
}
console.log(SplitString.join(" "));

// Q) Write a JavaScript function to concatenates a given string n times (default is 1)
console.log("Question no 14");
let s1 = "hello";
let times = 5;
let padded = s1.repeat(times);
console.log(padded);


// Q) Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"
console.log("Question no 15");
let v = 361;
function func(vtoString){
     vtoString = v.toString();
    let lengt= vtoString.length
    for(let i=0; i<lengt ; i++)
    
    {    let last = lengt-1;
        if(vtoString[last]=='1'){
            console.log(vtoString[last] + "st");
            break;
        }
        else if(vtoString[last]=='2'){
            console.log(vtoString[last] + "nd");
            break;
        }
        else if(vtoString[last]=='3'){
            console.log(vtoString[last] + "rd");
            break;
        }
        else{
            console.log(vtoString[last] + "th");
            break;
        }
    
    
    }
}
func(v);


console.log("Question no 16");
// Q) Write a JavaScript function to create a Zerofilled value with optional +, - sign.
function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));