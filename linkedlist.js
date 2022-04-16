// Linked list questions
// What? type of data structure
// Nodes are the container that holds the data, many nodes can be connected
// How to tell? Node X is linked to Node Y
// The last node next is linked to null
// first node is the head (position 0), last node is the tail
// think of the linked list as an ordered list
// arrays stored continuously, linked list are stored anywhere
// how to traverse linked list? pass reference to head and go through pointers

// linked list setup
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

const q = new Node("Q");
const r = new Node("R");
const s = new Node("S");

a.next = b;
b.next = c;
c.next = d;

q.next = r;
r.next = s;

// A -> B -> C -> D -> null


// Question 1- traverse a linked list using iteration
const printLinkedList = (head) => {
    let current = head;
    while(current !== null){
        console.log(current);
        current = current.next;
    }
};

// printLinkedList(a);

// Question 2- traverse a linked list using recursion
const printLinkedListRecursion = (head) => {
    if(head === null) return;
    console.log(head);
    printLinkedListRecursion(head.next);
}
// printLinkedListRecursion(a);


// Question 3- return an array of all the nodes in the linked list using iterative
const returnLinkedListToArray = (head) => {
    let current = head;
    let values = [];
    while(current !== null){
        values.push(current.val);
        current = current.next;
    }
    return values;
}
// console.log(returnLinkedListToArray(a));


// Question 4- return an array of all the nodes in the linked list using recursion
const returnLinkedListToArrayRecursion = (head) => {
    let values = [];
    fillValues(head,values);
    return values;
}
const fillValues = (head,values) => {
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next,values);
}
// console.log(returnLinkedListToArrayRecursion(a));

// Node setup
const nodeA = new Node(2);
const nodeB = new Node(8);
const nodeC = new Node(3);
const nodeD = new Node(7);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

// Question 5- return sum of values in linked list using iterative
const returnSumLinkedList = (head) => {
    let current = head;
    let sum = 0;
    while(current !== null){
        sum += current.val;
        current = current.next;
    }
    return sum;
}
// console.log(returnSumLinkedList(nodeA));


// Question 6- return sum of values in linked list using recursion
const returnSumLinkedListRecursion = (head) => {
    if(head === null) return 0;
    return head.val + returnSumLinkedListRecursion(head.next);
}
// console.log(returnSumLinkedListRecursion(nodeA));


// Question 7- return if the target is in the linked list using iterative
const findTarget = (head,target) => {
    let current = head;
    while(current !== null){
        if(current.val === target) return true;
        current = current.next;
    }
    return false;
}
// console.log(findTarget(nodeA,7));


// Question 8- return if the target is in the linked list using recursion
const findTargetRecursion = (head, target) => {
    if(head === null) return false;
    if(head.val === target) return true;
    return findTargetRecursion(head.next,target);
}
// console.log(findTargetRecursion(nodeA,7));


// Question 9- get node value or find the node value at an index
const findIndexValue = (head,index) => {
    let count = 0;
    let current = head;
    while(current !== null){
        if(count === index) return current.val;
        count += 1;
        current = current.next;
    }
    return null;
}
// console.log(findIndexValue(a,6));


// Question 10- get node value or find the node value at an index using recursion
const findIndexValueRecursion = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;
    return findIndexValueRecursion(head.next,index - 1);
}
// console.log(findIndexValueRecursion(a,2));
// console.log(findIndexValueRecursion(a,6));


// Question 11- reverse list
const reverseList = (head) => {
    let prev = null;
    let current = head;

    while(current !== null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// reverseList(a);
// console.log(d)
// console.log(c)
// console.log(b)
// console.log(a)


// Question 12- reverse list using recursion
const reverseListRecursion = (head, prev = null) => {
    if(head === null) return prev;
    const next = head.next; // using variable to not lose access
    head.next = prev;
    reverseListRecursion(next, head);
};
// reverseListRecursion(a);
// console.log(a);
// console.log(d);


// Question 13- zipper list, alternate between two linked list to give new linked list
const zipperList = (head1, head2) => {
    let tail = head1;
    let count = 0;
    let current1 = head1.next;
    let current2 = head2;

    while(current1 !== null && current2 !== null){
        if(count % 2 === 0){
            tail.next = current2;
            current2 = current2.next;
        } 
        if(count % 2 !== 0) {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    return head1;
}
// console.log(zipperList(a,q))


// Question 14- zipper list using recursion
const zipperListRecursion = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperListRecursion(next1,next2);

    return head1;
}
// console.log(zipperListRecursion(a,q));