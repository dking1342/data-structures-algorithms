import express from 'express';
const app = express();
app.listen(5000,()=>console.log('server is listening'))

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {

    let output = [];
    for(let i = str.length; i >= 0; i--){
        output.push(str[i])
    }
    console.log(output.join(''))

    return str.split('').reverse().join('');
}
// console.log(reverseString('hello'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {

    // omit spaces and punctuation and case
    let newStr = str.toLowerCase();
    let regex = /[\s\.\,]/g;
    newStr = newStr.replace(regex,'').toLowerCase();
    let reverseNewStr = newStr.split('').reverse().join('');

    console.log(newStr === reverseNewStr)

    let reverse = str.split('').reverse().join('');
    return str === reverse;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (int) => {

    return Number(int.toString().split('').reverse().join(''))
}
// console.log(reverseInt(520980981))

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
const capitalizeLetters = (str) => {
    return str
        .split(' ')
        .map((word,i)=> {
            let first = word.substring(0,1);
            let rest = word.substring(1,);
            return `${first.toUpperCase()}${rest}`
        }).join(' ')
}
// console.log(capitalizeLetters('i love javascript'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxCharacter = (str) => {

    let obj = 
        Object.entries(str.split('').reduce((acc,val)=>{
            acc[val] = acc[val] + 1 || 1;
            return acc;
        },{}))
        .sort()[0][0];
    return obj
}
// console.log(maxCharacter('javadaviscript'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
const fizzBuzz = () => {

    let fizz = 
        [...Array(100)]
        .map((item,i)=> i + 1)
        .map(num=>{
            return (num % 3 === 0 && num % 5 === 0) ?
                'FizzBuzz' : 
                num % 3 === 0 ?
                'Fizz' :
                num % 5 === 0 ? 
                'Buzz' :
                num
        })
        .join(', ')
        return fizz


    let output = [];
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            output.push('FizzBuzz');
        } else if( i % 3 === 0){
            output.push('Fizz'); 
        } else if (i % 5 === 0){
            output.push('Buzz');
        } else {
            output.push(i)
        }
    }
    output = output.join(', ')
    // return output;
}
// console.log(fizzBuzz())

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

const longestWord = (sen) => {

    let long = sen.split(' ').map((letter,i)=> letter.replace(/[^A-z]/,'')).map(letter=> letter.length).reduce((a,v)=> Math.max(a,v))
    let longArr = sen.split(' ').map((letter,i)=> letter.replace(/[^A-z]/,'')).filter(word=> word.length === long)
    return longArr

}
// console.log(longestWord('Hello , my name is djiofe Brad'))

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray = (arr, len) => {

    return arr.reduce((acc,v,i,array)=>{
        if(i % len === 0){
            acc.push(array.slice(i, i + len))
        }
        return acc
    },[])
}
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArray = (arrays) => {
    return arrays.flat(Infinity)
}
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

    let arr = [...arguments];
    arr = arr
        .reduce((acc,val)=>{
            acc.push(val.toLowerCase().replace(/[^A-z]/g,'').split('').sort().join(''))
            return acc
        },[])
        .every((item,i,array)=> item === array[0])
    return arr;

    // let sort1 = str2.toLowerCase().replace(/[^A-z]/g,'').split('').sort().join('');
    // console.log(sort1)
}
// console.log(isAnagram('Dormitory','dirty room##'));

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = (str) => {

    str = str
        .toLowerCase()
        .split('')
        .map((item,i,arr)=>{
            let char = str.charCodeAt(i);
            if(char === 32){
                return String.fromCharCode(32);
            } else if(char === 122){
                return String.fromCharCode(97)
            } else {
                return String.fromCharCode(char + 1);
            }
        })
        .map(letter=> letter.replace(/[aeiou]/g,letter.toUpperCase()))
        .join('')
    return str
}
// console.log(letterChanges('zzz time to sleep'))

// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

const addAll = (...args) => args.reduce((a,v)=> a + v ,0);
// console.log(addAll(2,5,6,7))

// CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

const sumAllPrimes = (num) => {
    let counter = 2;
    // let grandChecker = [];
    let grandChecker = 0;

    while(counter <= num){
        let arrayChecker = [];
        for(let i = 2; i <= counter; i++){
            (counter % i === 0 ) && arrayChecker.push(i)
        }
        // (arrayChecker.length === 1) && grandChecker.push(arrayChecker);
        if(arrayChecker.length === 1){grandChecker += arrayChecker[0]} 
        arrayChecker = []
        counter++
    }
    // return grandChecker.reduce((a,v)=> a + Number(v) ,0)
    return grandChecker;
}
// console.log(sumAllPrimes(10))

// CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

const seekAndDestroy = (arr, ...args) => {
    
    return arr
        .map(item=>(!args.includes(item)) && item)
        .filter(item=> item)
}
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

const sortByHeight = (arr) => {
    let heights = arr.filter(item=> item !== -1).sort();
    let counter = 0;
    return [...Array(arr.length)].map((item,i)=>{
        if(arr[i] === -1){
            return -1;
        } else {
            counter++
            return heights[counter - 1]
        }
    })
}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

// CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

const missingLetters = (str) => {
    let arr = str.split('').filter((letter,i)=> str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1 && i !== 0);
    return arr.length ? arr.map((item,i)=> String.fromCharCode(item.charCodeAt() - 1)).join(', ') : undefined;
}
// console.log(missingLetters("acdefghijkmnoprstuvwxyz"))

// CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

const evenOddSums = (arr) => [arr.filter(item=> item % 2 === 0).reduce((a,v)=> a + v,0), arr.filter(item=> item % 2).reduce((a,v)=> a + v,0)]
console.log(evenOddSums([50, 60, 60, 45, 71]))