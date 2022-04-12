// reverse the string
const reversal = (str) => {
    let reverse = string.split('').reverse().join('');
    console.log(reverse)

    let output = '';
    for(i= str.length - 1; i >= 0; i--){
        output += str[i]
    }
    console.log(output)
}
let string = "Welcome to this Javascript Guide!";
reversal(string);

// see if the argument is an array
const findArray = (obj) => {

    let result = Array.isArray(obj) ? 'Array' : 'Not an array';
    console.log(result);
    console.log(Object.prototype.toString.call(obj))
    
}
let arrayList = [1,2,3];
findArray(arrayList)

// empty an array
const emptyArray = (arr) => {
    console.log(arr.slice(-1,0))
    arr.length = 0
    console.log(arr)

    arr = [];
    console.log(arr)

}
let arrayList2 = ['a','b','c','d','e','f']
emptyArray(arrayList2)

// check if number is an integer
const checkNumber = (num) => {
    let result = Number.isInteger(num);
    console.log(result)

}
let num = 45;
checkNumber(num)

// enqueue and dequeue
var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}

// duplicate the array
const duplicate = (arr) => {
    let newArr = [...arr, ...arr]
    console.log(newArr)
}
duplicate([1,2,3,4,5])


const mul = (x) => {
    return (y) => {
        return (z) => {
            console.log(x * y * z)
            return x * y * z
        }
    }
}
mul(2)(3)(4)
mul(4)(5)(6)

// add six to the base number
function createBase (num) {
    return function innerFunc (innerNum) {
        return num + innerNum
    }
}
let addSix = createBase(6);
console.log(addSix(4))

// fizzbizz for multiples of 3 and 5
for(i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbizz')
    } else if(i % 3 === 0){
        console.log('fizz')
    } else if(i % 5 === 0){
        console.log('bizz')
    } else {
        console.log(i)
    }
}

// anagram
const anagram = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase()
    let output = [];
    for (const str of str1) {
        output.push(str2.indexOf(str))
    }
    output.every(item=> item >= 0) ? console.log('Anagram') : console.log('Not an anagram')
}
anagram('Mary','Army')

const counter = () => {
    let counter = 0;
    return {
        add(increment){ counter += increment},
        retrieve(){return `The counter is currently at ${counter}`}
    }
}
let c = counter();
c.add(5);
c.add(15);
let ret = c.retrieve();
console.log(ret)

const multiply = (x) => {
    return (y) => {
        console.log('x',x,'y',y)
        return x * y;
    }
}
console.log(multiply(5)(6))

class Person{
    constructor(name, age,hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}

function Tree(name){
    this.name = name;
}
let redwood = new Tree('Elm')
console.log(redwood)
const person = new Person('Joe',23,'Basketball')

console.log(person)

// palindrome
const palidrome = (str) => {
    let regex = /[\s\W]/g
    let string = str.replace(regex, '').toLowerCase();
    let back = string.split('').reverse().join('')
    return (string === back) ? true : false
}
let a = palidrome('Mr. Owl ate my metal worm')
console.log(a)

// fibs
const fibs = (n) => {
    if(n === 1){
        return 0
    } else if(n === 2){
        return 1
    } else {
        let current = 1;
        let space = current;
        let previous = 0;

        for(i=3; i <= n; i++){
            space = current
            current = current + previous;
            previous = space
        }
        return current

    }

}

let f = fibs(50)
console.log(f)

const vowels = (str) => {
    let regex = /[aeiou]/g;
    let counter = 0;
    str.split('').forEach(item=>{
        if(regex.test(item)){
            counter += 1
        }
    })
    return counter;
}
let v = vowels('ajogiaeoihbaoihbaiuhriruhgiwuyibhwriyweihvkaeu')
console.log(v)

const capital = (str) => {
    let sentence = str.split(' ')
    return sentence.map((item,i)=>{
        let first = item.substring(0,1).toUpperCase();
        let rest = item.substring(1,).toLowerCase();
        return `${first}${rest}`
    }).join(' ')
}
let cap = capital('the doG jumped into the pond')
console.log(cap)

const replacer = str => {
    let regex = /[l]/g;
    return str.replace(regex, 'X')
}
let repe = replacer('hello world');
console.log(repe)

// duplicates
const duplicater = arr => {
    let a = arr;

    let ar = [];
    a.forEach((num,i)=> i === a.lastIndexOf(num) && ar.push(num))
    console.log(ar)


    return [...new Set(arr)]

}
console.log(duplicater([1,1,2,2,3,3,4,4,5,5,6,6]))

const pairSum = (arr, value) => {

    let results = [];  
    for(i=0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === value){
                results.push([arr[i],arr[j]])
            }
        }
    }
    console.log(results)
}
pairSum([1,2,3,4,5,7],5)

// example of an atm
let current = 120.00;
let withdrawl = 300;

const atm = (curr, withdraw) => {

    let isMonetaryDenomination = withdraw % 5 === 0;
    let isAccountAboveWithdraw = curr > withdraw;
    let isAccountPositiveAfterWithdraw = curr - withdraw - 0.5 > 0;
    let isAccountPositive = 0 <= curr <= 2000;
    let isWithdrawCorrect = 0 < withdraw <= 2000;
    let testWithdraw = [ isMonetaryDenomination, isAccountAboveWithdraw, isAccountPositive, isAccountPositive, isWithdrawCorrect, isAccountPositiveAfterWithdraw ];

    if(testWithdraw.every(item=> item === true)){
        let newAccountCurrent = curr - withdraw - 0.50;
        return `$${newAccountCurrent.toFixed(2)}`
    } else {
        return 'Invalid withdraw request'
    }
}

console.log(atm(current, withdrawl))

// pairwise- Given an array arr, find element pairs whose sum equal the second argument arg and 
// return the sum of their indices
function pairwise(arr, arg) {
    let output = [];
    for(let i=0; i < arr.length; i++){
        for(let j= i+1; j < arr.length; j++){
        if(arr[i] + arr[j] === arg && !output.includes(i) && !output.includes(j)){

            output.push(i,j)
            
        }
        }
    }
    let result = output.reduce((a,c)=> a + c,0) 
    console.log(result,output)
    return result;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);

const arr1 = ['apple','apple','banana','banana','banana','cherry'];

// counts the number of times an element is in an array
let a1 = arr1.reduce((acc,val)=>{
    acc[val] = acc[val] + 1 || 1 ;
    return acc
},{})

document.querySelector('.output').textContent = JSON.stringify(a1,null,2)
console.log(JSON.stringify(a1))

console.log([a1])