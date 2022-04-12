// Dynamic Alogrithms

// Recap *******************
// notice any overlapping subproblems
// decide what is the trivially smallest input
// think recursively to use memoization
// think iteratively to use tabulation
// draw a strategy first

// Memoization ****************
// Memoization process
// 1. Make it work- brute force
// 1a. visualize the problem as a tree- draw the tree
// 1b. implement the tree using recursion- leaf is the base case
// 1c. test it- try smaller inputs for proof of concept
// 1d. check O notation and where improvements can be made
// ******
// 2. Make it efficient- optimize
// 2a. add a memo object, default object as paramter
// 2b. add a base case to return memo values
// 2c. store return values into the memo

// memoization- memo is a reminder or way to store duplicates
// js object
// keys will be arg to fn
// value will be the return function


// Interview question 1- fib
// sequential
const fib = (num) => {
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}
// console.log(fib(8)) // 21

// using recursion with memoization
const fibRefactor = (num, memo = {}) => {
    if(num in memo) return memo[num];
    if(num <= 2) return 1;
    memo[num] = fibRefactor(num - 1,memo) + fibRefactor(num - 2,memo);
    return memo[num];
}
// console.log(fibRefactor(8));

// Interview question 2- grid traveler
// optimization
const gridTraveler = (r,c,memo={}) => {
    // memoization
    if(`${r},${c}` in memo) return memo[`${r},${c}`];

    // base case for bottom of tree
    if(r === 1 && c === 1) return 1;
    if(r === 0 || c === 0) return 0;

    // not using memoization    
    // return gridTraveler(r - 1,c) + gridTraveler(r, c - 1);

    // using memoization
    memo[`${r},${c}`] = gridTraveler(r - 1,c,memo) + gridTraveler(r, c - 1,memo);
    return memo[`${r},${c}`];
}
// console.log(gridTraveler(1,1)); // 1
// console.log(gridTraveler(2,3)); // 3
// console.log(gridTraveler(3,2)); // 3
// console.log(gridTraveler(3,3)); // 6
// console.log(gridTraveler(18,18)); // 2333606220


// Interview question 3- can the items sum to a value?
// decision (boolean, yes/no)
const canSum = (targetSum,numbers,memo={}) => {
    // memoization
    if(targetSum in memo) return memo[targetSum];

    // base case
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder,numbers,memo)) {
            memo[targetSum] = true;
            return true
        }
    }
    memo[targetSum] = false;
    return false;
}
// console.log(canSum(7,[2,3])) // true
// console.log(canSum(7,[5, 3, 4, 7])) // true
// console.log(canSum(7,[2,4])) // false
// console.log(canSum(8,[2,3,5])) // true
// console.log(canSum(300,[7,14])) // false


// Interview question 4- how can values sum to input
// combinations 
const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder,numbers,memo); // array or null
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum]=null;
    return memo[targetSum];
}
// console.log(howSum(7,[5, 3, 4, 7])) // [4,3]
// console.log(howSum(8,[3,5,2])) // [2,3,3]


// Interview question 5- best sum of values to input with least amount of values
// optimization
const bestSum = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder,numbers,memo);
        if(remainderCombination !== null){
            const combination = [...remainderCombination,num];
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}
// m = target sum
// n = numbers.length
// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(m^2 * n)
// space: O(m^2)

// console.log(bestSum(7,[5, 3, 4, 7]));
// console.log(bestSum(8,[3,5,2])) // [5,3]
// console.log(bestSum(100,[5,10,15,25])) // [25,25,25,25]


// Interview question 6- can construct a word from selected letters?
// decision- boolean yes/no
const canConstruct = (target, wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(!target) return true;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix,wordBank,memo)){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
// m is target.length
// n is wordBank.length
// Brute force
// time: O(n^m * m)
// space: O(m^2)
// Memoized
// time: O(m^2 * n)
// space: O(m^2)

// console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd'])); // true
// console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar'])); // false
// console.log(canConstruct('eeeeeeeef',['e','ee','eee','eeee'])); // false


// Interview question 7- number of ways that the target can be constructed by wordbank elements
const countConstruct = (target,wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(!target) return 1;
    let count = 0;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const incrementer = countConstruct(suffix,wordBank,memo);
            count += incrementer;
            memo[target] = count;
        }
    }
    memo[target] = count;
    return memo[target];
}
// m is target.length
// n in wordBank.length
// Brute force
// time: O(n^m * m)
// space: O(m^2)
// Memoized
// time: O(m^2 * n)
// space: O(m^2)

// console.log(countConstruct('abcdef',['ab','abc','cd','def','ef','abcd'])); // 3
// console.log(countConstruct('eeeeeeeef',['e','ee','eee','eeee'])); // 0


// Interview question 8- return all the ways the target can be constructed
const allConstruct = (target, wordBank,memo={}) => {
    if(target in memo) return memo[target];
    if(!target) return [[]];
    let wordBankArray = [];

    for (let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            let slicedChars = allConstruct(suffix,wordBank);
            const targetWays = slicedChars.map(way=>[word,...way]);
            // wordBankArray = [...wordBankArray,...targetWays]
            wordBankArray.push(...targetWays);
        }
    }
    memo[target] = wordBankArray;
    return wordBankArray;
}
// m is target.length
// n in wordBank.length
// Brute force
// time: O(n^m * m)
// space: O(m)
// Memoized
// time: O(m^2 * n)
// space: O(m^2)

// console.log(allConstruct('purple',['purp','p','ur','le','purpl'])) // [[purp,le],[p,ur,p,le]]
// console.log(allConstruct('abcdef',['ab','abc','cd','def','ef','abcd'])); // [[ab,cd,ef],[abc,def],[abcd,ef]]
// console.log(allConstruct('aaaaaaaa',['a','aa','aaa','aaaa'])); // large 2D array 




// Tabulation ****************
// Tabulation process
// 1. Visualize the problem as a table
// 2. size the table based on the inputs
// 3. initialize the table with default values, use compatible types
// 4. seed the trivial answer into the table
// 5. iterate through the table
// 6. fill further positions based on the current position


// Interview question 9- get a value from the sequence of fib
// console.time("fibTab")
const fibTab = (num) => {
    const table = Array(num + 1).fill(0);
    // table[1] = 1;

    for(let i = 0; i <= num; i++){
        if(i == 1) table[i] = 1;
        if(i + 1 <= num) table[i + 1] += table[i];
        if(i + 2 <= num) table[i + 2] += table[i];
    }
    return table[num];
}
// fibTab(1000) // 8
// console.timeEnd("fibTab")
// console.log(fibTab(6)) // 8
// console.time("fibTab2");
const fibTab2 = (num) => {
    // let index = 0;
    // let sequence = [];
    let index = 2;
    let sequence = [0,1];

    while(index <= num){
        // (index == 0) ? sequence.push(0) 
        // : (index == 1) ? sequence.push(1)
        // : sequence.push(sequence[index - 1] + sequence[index - 2]);
        // index += 1;
        sequence.push(sequence[index - 1] + sequence[index - 2]);
        index += 1;
    }
    return sequence[num];
}
// fibTab2(1000) // 8;
// console.timeEnd("fibTab2")
// console.log(fibTab2(1000)) // 8;
const fibTab3 = (num) => {
    let index = 0;
    let prev = 1;
    let current = 1;
    let sequence = 1;

    while(index < num){
        if(index > 1){
            sequence = current + prev;
            prev = current;
            current = sequence;
        }
        index += 1;
    }
    return sequence;
}
// console.log(fibTab3(6)) // 8


// Interview question 10- grid traveler
const gridTravelerTab = (row,col) => {
    const table = Array(row + 1)
        .fill()
        .map(() => Array(col + 1).fill(0));

    // base case of 1,1
    table[1][1] = 1;

    for(let i = 0; i <= row; i++){
        for(let j = 0; j <= col; j++){
            const current = table[i][j];
            if(j + 1 <= col) table[i][j + 1] += current // right neighbor
            if(i + 1 <= row) table[i + 1][j] += current // bottom neighbor
        }
    }
    return table[row][col];
}
// m is rows
// n is cols
// time: O(n*m)
// space: O(n*m)

// console.log(gridTravelerTab(1,1)); // 1
// console.log(gridTravelerTab(2,3)); // 3
// console.log(gridTravelerTab(3,2)) // 3;
// console.log(gridTravelerTab(3,3)) // 6


// Interview question 11- can sum tabulation
const canSumTab = (target,numbers) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= target; i++){
        if(table[i]){
            for(let num of numbers){
                table[i + num] = true;
            }
        }
    }
    return table[target];
}
// m is target
// n is length of numbers
// time: O(m*n)
// space: O(m)

// console.log(canSumTab(7,[5,3,4])) // true
// console.log(canSumTab(7,[2,4])) // false


// Interview question 12- how sum tabulation
const howSumTab = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= target; i++){
        if(table[i] !== null){
            for(let num of numbers){
                table[i + num] = [ ...table[i], num ];
            }
        }
    }
    return table[target];
}
// m is target
// n is numbers.length
// time: O(m^2*n)
// space: O(m^2)

// console.log(howSumTab(7,[5,3,4])) // [4,3]
// console.log(howSumTab(7,[2,4])) // null
// console.log(howSumTab(8,[2,3,5])) // [2,2,2,2]


// Interview question 13- best sum tabulation
const bestSumTab = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= target; i++){
        if(table[i] !== null){
            for(let num of numbers){
                const potentialArray = [...table[i],num];

                if(!table[i + num] || table[i + num].length > potentialArray.length){
                    table[i + num] = potentialArray;
                }
            }
        }
    }
    return table[target];
}
// m is target 
// n in numbers.length
// time: O(m^2*n)
// space: O(m^2)

// console.log(bestSumTab(8,[2,3,5])) // [3,5]
// console.log(bestSumTab(100,[5,10,20,25])) // [25,25,25,25]
// console.log(bestSumTab(7,[2,4])) // null
// console.log(bestSumTab(0,[1,3])) // []


// Interview question 14- can construct tabulation
const canConstructTab = (target,wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= target.length; i++){
        if(table[i]){
            for(let char of wordBank){ 
                if(target.slice(i, i + char.length) === char){
                    table[char.length + i] = true;
                }
            }
        }
    }
    return table[target.length];
}
// m is target
// n is wordbank.length
// time: O(m^2*n)
// space: O(m)

// console.log(canConstructTab('abcdef',['ab','abc','cd','def','abcd'])) // true
// console.log(canConstructTab('skateboard',['bo','rd','ate','t','ska','sk','boar'])); // false


// Interview question 15- count construct tabulation
const countConstructTab = (target,wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i <= target.length; i++){
        if(table[0] > 0){
            for(let char of wordBank){
                if(target.slice(i, i + char.length) === char){
                    table[char.length + i] += table[i];
                }
            }
        }
    }
    return table[target.length];
}
// m is target
// n is wordbank.length
// time: O(m^2*n)
// space: O(m)

// console.log(countConstructTab('abcdef',['ab','abc','cd','def','abcd'])) // 1
// console.log(countConstructTab('purple',['purp','p','ur','le','purpl'])) // 2
// console.log(countConstructTab('purple',['purp','p','ur','le','purpl','e'])) // 3
// console.log(countConstructTab('skateboard',['bo','rd','ate','t','ska','sk','boar'])); // 0


// Interview question 16- all construct tabulation
const allConstructTab = (target,wordBank) => {
    const table = Array(target.length + 1).fill([]);
    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        for(let char of wordBank){
            if(target.slice(i, i + char.length) === char){
                const combination = table[i].map(item=> [...item,char])
                table[char.length + i] = [...table[char.length + i],...combination];
            }
        }
    }
    return table[target.length];
}
// m is target.length
// n is wordBank.length
// time: O(n^m)
// space: O(n^m)

// console.log(allConstructTab('abcdef',['abcd','cd','abc','def','ab','ef'])) // [[abc,def]]
// console.log(allConstructTab('purple',['purp','p','ur','le','purpl'])) // [[purp,le],[p,ur,p,le]]