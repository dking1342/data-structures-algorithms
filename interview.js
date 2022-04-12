
// q1: extract values from the object
let x = {
    a:1,
    b:2
};

let objectValues = arr => Object.values(arr).join(', ');
console.log(objectValues(x));

// q2: reverse the order of a string
let a = 'hello';
let b = 'olleh';
let reverseStringConverter = str => {
    let reverseArray = [];
    for(let i = str.length - 1; i >= 0; i--){
        reverseArray.push(a[i])
    };
    console.log(reverseArray.join(''))

    return str
        .split('')
        .reverse()
        .join('');
}
let compare = reverseStringConverter(a) === b;
console.log(compare)

// q3: get the output of the object methods chained together
const obj1 = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a);
        return this; // need to put this in order for the next part of the chain to work properly
    },
    getB(){
        console.log(this.b);
        // return this.b
    }
}
let firstFunc = obj1.getA;
let secondFunc = obj1.getB;
let boundFirstFunc = firstFunc.bind(obj1);
let boundSecondFunc = secondFunc.bind(obj1);
console.log(boundFirstFunc(),boundSecondFunc())
console.log(obj1.getA().getB());

// q4: make a method to print out the elements of the array
// console.log([1,2].print()); // does not work because print is not a valid method
Array.prototype.print = function(){
    console.log(`${this}`,this);
    console.log(this.toString(),String(this),"" + this)
    return this.map(item=> item).join(',')
} 
console.log([1,2].print())

// q5
// let fn1 = function(x){
//     this.x = x;
// }
// const fn2 = function(x,y){
//     this.y = y;
// }
// const newfn2 = new b('x','y');
// newfn2.getX();
// newfn2.getY();

// const fn1 = function(x){
//     this.x = x;
// }
// const fn2 = function(x,y){
//     this.y = y;
//     this.x = new fn1(x).x;
//     getX(){
//         return this.x;
//     }
//     getY(){
//         return this.y;
//     }
// }
// let newfn11 = new fn2('x','y');
// console.log(newfn11.getX())

class Func1 {
    constructor(x){
        this.x = x;
    }
    getX(){
        return this.x;
    }
}
class Func2 extends Func1 {
    constructor(x,y){
        super(x);
        this.y = y;
    }
    getY(){
        return this.y;
    }
}

let newfn1 = new Func1('x');
console.log(newfn1.getX());
let newfn2 = new Func2('xaxis','yaxis');
console.log(newfn2.getX(),newfn2.getY());

function FuncA(x){
    this.x = x;
}
FuncA.prototype.getX = function(){
    return this.x;
}
function FuncB(x,y){
    FuncA.call(this,x);
    this.x = x;
    this.y = y;
}
FuncB.prototype = Object.create(FuncA.prototype);
FuncB.prototype.getY = function(){
    return this.y;
}

let newFuncA = new FuncA('xxx');
let newFuncB = new FuncB('xxxx','yy')
console.log(newFuncA.getX())
console.log(newFuncB)
console.log(newFuncB.getY());
console.log(newFuncB.x)

// q6
const obj2 = {
    a: {
        b:{
            c:{
                d:1
            }
        }
    }
};

let newObj = {};
const recurseObj = (obj) => {

    for (const key in obj) {
        // if(!Object.hasOwnProperty.call(obj,key)){
        //     console.log('else',obj[key]);
        //     return obj[key];
        // } else {
        //     // console.log('children',obj[key],obj,key)
        //     recurseObj(obj[key]);
        // }

        if(typeof obj[key] !== 'object'){
            console.log('else',obj)
            newObj = {...newObj, obj}
            return 
        } else {
            recurseObj(obj[key])
        }

        // console.log(key,obj,obj[key])
        // console.log(typeof key, typeof obj)
        // if (Object.hasOwnProperty.call(obj, key)) {
        //     console.log
        //     const element = obj[key];
        //     console.log(element)
        // }
    }
    // return obj
    // console.log(newObj)
    return newObj;
}
console.log(recurseObj(obj2))
// recurseObj(obj2)

// const cloneObj = {...obj2}; // shallow copy
// const cloneObj = Object.assign({},obj2); // shallow copy
// const cloneObj = JSON.parse(JSON.stringify(obj2)) // deep copy easy way
// cloneObj.a.b.c = 2;
// console.log(obj2,cloneObj)

// q7
const a1 = [1,2,5,7,9];
const a2 = [2,5,7,12,100];
const a3 = [...a1,...a2].sort((a,b)=> a - b);
console.log(a3)

// q8: currying
const getSum = (num1)=>{
    return (num2) => {
        return num1 + num2;
    }
}
let add1 = getSum(2)(4);
let add2 = getSum(3);
console.log(add2(2))

const getMult = num1 => num2 => num1 * num2;
console.log(getMult(3)(4));



