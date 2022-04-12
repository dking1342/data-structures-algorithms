// algorithms

// bubble sort
const bubbleSort = (array) => {

    // example of swapping places or elements within an array
    let arr = array;
    [arr[0],arr[3]] = [arr[3],arr[0]]

    // nested loops for swapping elements of the array
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length - 1 - i;j++){
            if(array[j] > array[j + 1]){
                [array[j],array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    console.log('bubble sort',array)
    return array;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// selection sort
const selectionSort0 = (array) => {
    let counter = 0;
  
    // recursive function
    const recurse = (array) => {
      if(counter === array.length){
        return
      } else {
        let a = array.slice(counter,array.length)
        let min = Math.min(...a)
        let index = a.indexOf(min)
        if(index !== counter){
          [array[index + counter],array[counter]] = [array[counter],array[index + counter]]
        }
        counter++
        recurse(array)
      }
    }
    recurse(array)
    console.log('selection sort',array)
    return array;
}

const swap = (a, b, arr) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) min = j;
        }
        swap(i, min, array);
    }
    return array;
}

selectionSort0([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// insertion sort
const insertionSort = (array) => {
    // define j and i so that j can be used in the function scope. Otherwise j after its loop will be undefined
    let j,i;
    for (i = 1; i < array.length; i++) {
        let curr = array[i];

        // sets j and the parameters of the loop then goes backwards through it
        for (j = i - 1; j >= 0 && array[j] > curr; j--) {
        array[j + 1] = array[j];
        }
        // replacing the previous number until it is less than curr defined earlier
        array[j + 1] = curr;
    }
    console.log('insertion sort',array)
    return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// quick sort with recursion
const quickSort = (array) => {
    if (array.length === 0) {
      return [];
    } else {
      const pivotValue = array[0];
      // Sort elements into three piles
      let lesser = [];
      let equal = [];
      let greater = [];
      for (let e of array) {
        if (e < pivotValue) {
          lesser.push(e);
        } else if (e > pivotValue) {
          greater.push(e);
        } else {
          equal.push(e);
        }
      }
      return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
  }

console.log('quick sort', quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

// merge sort
const mergeSort = (array) => {
    if (array.length === 1) {
      return array;
    } else {
      const splitIndex = Math.floor(array.length / 2);
      return merge(
        mergeSort(array.slice(0, splitIndex)),
        mergeSort(array.slice(splitIndex))
      );
    }
    // Merge two sorted arrays
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      // After looping ends, one array is empty, and other array contains only
      // values greater than all values in `merged`
      return [...merged, ...array1, ...array2];
    }
}

console.log('merge sort', mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
