// Working with Algorithms
// Sorting Algorithms
// 1. Using bubble sort to sort an array
// Problem statement: Given an array of integers, sort the array
// const arr = [-6, 20, 8, -2, 4].   bubbleSort(arr) => [-6, -2, 4, 20];

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = arr[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true;
            }
            
        }
    } while (swapped);
}

const array = [-6, 20, 8, -2, 4]
bubbleSort(array)
// console.log(arr)
// The big O is Quadratic.

// Descending Order
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true;
            }
            
        }
    } while (swapped);
}

// const arr = [4, -6, -7, 20, 8, -2, 4, 1, 3]
// bubbleSort(arr)
// console.log(arr)




// 2. Insertion Sort
// split the array into a soted and unsorted part
// function insertionSort(arr) {
//     for (let i = 1; i < array.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1;
//         }
//         arr[j + 1] = numberToInsert
//     }
// }
// const arr = [4, -6, -7, 20, 8, -2, 4, 1, 3]
// insertionSort(arr)
// console.log(arr)
// Big O is Quadratic


// function insertionSort(arr) {
//     for (let i = 1; i < array.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] < numberToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1;
//         }
//         arr[j + 1] = numberToInsert
//     }
// }
// const arr = [9, 4, -6, -7, 20, 8, -2, 1, 3, -8]
// insertionSort(arr)
// console.log(arr)

// 3. Quick Sort
// Identify the pivot element in the array(either first, last, median, random)
// sort the array by pushing the smaller in to the laft and bigger in to the right.
// function quickSort(arrays) {
//     if(arrays.length < 2 ) {
//         return arrays;
//     }
//     let pivot = arrays[arrays.length - 1];
//     let leftArray = [];
//     let rightArray = [];
//     for (let i = 0; i < arrays.length - 1; i++) {
//         if(arrays[i] < pivot) {
//             leftArray.push(arrays[i])
//         } else {
//             rightArray.push(arrays[i])
//         }
//     }
//     return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
// }
// const arrays = [4, -6, -7, 20, 8, -2, 3, 5 , 0, 2]
// quickSort(arrays)
// console.log(quickSort(arrays))
// The worst case complexity is 0n2(quadratic)
// The avearge case complexity is 0logn (linear)


// for descending order
// function quickSort(arrays) {
//     if(arrays.length < 2 ) {
//         return arrays;
//     }
//     let pivot = arrays[arrays.length - 1];
//     let leftArray = [];
//     let rightArray = [];
//     for (let i = 0; i < arrays.length - 1; i++) {
//         if(arrays[i] < pivot) {
//             leftArray.push(arrays[i])
//         } else {
//             rightArray.push(arrays[i])
//         }
//     }
//     return [...quickSort(rightArray), pivot, ...quickSort(leftArray)]
// }
// const arrays = [4, -6, -7, 20, 8, -2, 3, 5 , 0, 2]
// quickSort(arrays)
// console.log(quickSort(arrays))


// 4. Merge sort
//  Divide the array into two and seperate until there is only one arrary
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
const arr = [8, 3, -3, 0, -2, -8, 4, 7]
mergeSort(arr);
console.log(mergeSort(arr));
// Big O is logn of n




// Algorithm design techniques
// 1. Bruce Force
// 2. Greedy e.g = prims algorithms, kruskais algorithm
// 3. Divide and Conquer
// 4. Dynamic Programming e.g fibonacci and climbing staircase
// 5. Backtracking e.h n-queens-problem