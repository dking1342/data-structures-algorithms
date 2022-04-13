// Binary tree algorithms
// Terms:
// Node- the part of the tree that contains the data
// Edge- the part of the tree that connects nodes. They can be uni or multi directional
// Root node- the node that starts the tree. It has no parent node and there can be only one root for a binary tree.
// Leaf node- the node at the bottom most level that has no children. There can be as many leaf nodes as necessary.
// Parent node- a relative node that has one or more children node.
// Child node- a relative node that has a parent node.

//   Diagram
//      A
//     / \
//    B   C
//   / \   \
//  D   E   F

// Complexity - O notation
// n is the number of nodes
// m is the height of the tree
// Time is considered from the root to leaf and the relationship between each level and nodes
// Space is the potential number of leaf nodes and memory taken within the algorithm
// O notation is written like this: O(n)
// There are good, fair, poor and bad considerations of the O notation depending on how costly the time and space would be

// Rules
// At most there are two children per node
// There is exactly one root
// There is exactly one path between the root and any node

// Progamming point of view
// Nodes can have any data type, but a tree could be an object type
// Methods to solve any problem is depth and breadth, which is stack or queue
// Stack moves down the depth of the tree before moving back up the tree
// Stack approach can be done iteratively or through recursion
// Stack puts values on the stack then takes from the top of the stack
// Queue moves across the level until there are no nodes in that level
// Queue approach can be done __
// Queue pushes values into the queue then removes the first value of the queue

// Practice node structure setup
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Interview question 1- depth method/stack using iterative approach
const depthFirstValues = (root) => {
    // edge case for empty tree
    if(root === null) return [];

    const stack = [ root ];
    const values = [];

    while(stack.length > 0){

        const current = stack.pop();
        values.push(current.val);
        
        // right to left
        // if(current.left) stack.push(current.left);
        // if(current.right) stack.push(current.right);

        // left to right
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return values;
}

// console.log(depthFirstValues(a));


// Interview question 2- depth method/stack using recursive approach
const depthFirstValuesRecursive = (root) =>{
    if(root === null) return [];
    const leftChild = depthFirstValuesRecursive(root.left);
    const rightChild = depthFirstValuesRecursive(root.right);
    return [ root.val, ...leftChild, ...rightChild];
}
// console.log(depthFirstValuesRecursive(a));


// Interview question 3- breadth method/queue using iterative approach
const breadthFirstValues = (root) => {
    if(root === null) return [];
    const queue = [ root ];
    const values = [];
    while(queue.length > 0){
        const current = queue.shift();
        values.push(current.val);
        // left to right
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        // right to left
        // if(current.right) queue.push(current.right);
        // if(current.left) queue.push(current.left);
    }
    return values;
}
// console.log(breadthFirstValues(a));


// Interview question 4- breadth method/queue
const canFindTargetBreadth = (root,target) => {
    if(root === null) return false;
    const queue = [ root ];
    while(queue.length > 0){
        const current = queue.shift();
        if(current.val === target) return true
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
}
// console.log(canFindTargetBreadth(a,"e"));


// Interview question 5- breadth method/queue try to find a target value
const canFindTargetRecursive = (root,target) => {
    if(!root) return false;
    if(root.val === target) return true;
    return canFindTargetRecursive(root.left,target) || canFindTargetRecursive(root.right,target);
}
// console.log(canFindTargetRecursive(a,"e"));

// Sumall node setup
const sumA = new Node(3);
const sumB = new Node(11);
const sumC = new Node(-4);
const sumD = new Node(4);
const sumE = new Node(-20);
const sumF = new Node(1);
sumA.left = sumB;
sumA.right = sumC;
sumB.left = sumD;
sumB.right = sumE;
sumC.right = sumF;

// Diagram
//      3
//     / \
//   11   -4
//  /  \    \
// 4   -20   1

// Interview question 6- sum all the nodes using stack/recursion
const sumAll = (root) => {
    if(root === null) return 0;
    return root.val + sumAll(root.left) + sumAll(root.right);
}
// console.log(sumAll(sumA));


// Interview question 7- sum all nodes using queue/iteration
const sumAllQueue = (root) => {
    if(root === null) return 0;
    let totalSum = 0;

    const queue = [ root ];
    while(queue.length > 0){
        const current = queue.shift();
        totalSum += current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return totalSum;
}
// console.log(sumAllQueue(sumA));


// Interview question 8- find the min value using recursive
const findMinValue = (root) => {
    if(root === null) return Infinity;
    return Math.min(root.val,findMinValue(root.left),findMinValue(root.right));
}
// console.log(findMinValue(sumA));


// Interview question 9- find the min value using queue
const findMinValueQueue = (root) => {
    const queue = [ root ];
    let minVal = Infinity;
    while(queue.length > 0){
        const current = queue.shift();
        if(current.val < minVal) minVal = current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return minVal;
}
// console.log(findMinValueQueue(sumA));


// Interview question 10- max root to leaf sum
const maxRootSum = (root) => {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxRootSum(root.left),maxRootSum(root.right));
    return root.val + maxChildPathSum;

    // if(root === null) return 0;
    // const leftVal = maxRootSum(root.left);
    // const rightVal = maxRootSum(root.right);
    // let maxVal = root.val + Math.max(leftVal,rightVal);
    // return maxVal;
    // return root.val + Math.max(maxRootSum(root.left),maxRootSum(root.right));
}
console.log(maxRootSum(sumA));