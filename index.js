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
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     const middle = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, middle)
//     const rightArr = arr.slice(middle)
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }
// function merge(leftArr, rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//         if(leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }
// const arr = [8, 3, -3, 0, -2, -8, 4, 7]
// mergeSort(arr);
// console.log(mergeSort(arr));
// Big O is logn of n


// LEET CODE QUESTIONS
// Given a string s, find the length of the longest substring without repeating characters
// Using sliding window approach
function lengthOfSubstrings(st) {
    let chars = new Set();
    let left = 0;
    let longest = 0;
    for (let right = 0; right < s.length; right++) {
        while (chars.has(s[right])) {
            chars.delete(s[left]);
            left++
        }
        chars.add(s[right]);
        longest = Math.max(longest, right - left + 1)
        
    }
    return longest
}
const st = 'aadbef'
// console.log(lengthOfSubstrings(st));


// LEET CODE QUSTIONS 2
// Give two sorted arrays nums 1 and nums 2 of size m and n respectively, return the median of the two sorted arrays
function medianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a,b) => a - b);
    const totalLength = merged.length

    if (totalLength % 2 === 1) {
        return merged[Math.floor(totalLength / 2)]
    } else {
        return (merged[totalLength / 2 - 1] + merged[totalLength / 2]) / 2
    }
}
const nums1 = [1, 2, 3, 4, 5, 7, 8]
const nums2 = [ 1, 3, 4, 6, 7, 8, 10]
// 1,2,3,4,4,5,5,6,8,10
// console.log(medianSortedArrays(nums1, nums2))

// LEETCODE 3.
// Given a string s, return the longest palindromic substring in s
// e.g s = 'babad' ans = 'bab'or 'aba'  s = 'cbbd' ans = 'bb'
function palindromSubstring(s) {
    let longest = ''
    for (let i = 0; i < s.length; i++) {
        // odd length palindrome
        let palindrome = palindromic(s, i, i);
         // babad
        if (palindrome.length > longest.length) {
            longest = palindrome
        }
        // even length palindrome
        palindrome = palindromic(s, i, i + 1)
        if (palindrome.length > longest.length) {
            longest = palindrome
        }
        if (palindrome.length > s.length / 2) {
            break;
        }
        
    }
    return longest;
}
function palindromic(s, left, right) {
    // babad
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++
    }
    return s.slice(left + 1, right)
}

const s = 'babad'
// console.log(palindromSubstring(s));

var longestPalindrome = function (s) {
    let check = function (i, j) {
        let left = i;
        let right = j - 1;

        while (left < right) {
            if (s.charAt(left) !== s.charAt(right)) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    for (let length = s.length; length > 0; length--) {
        for (let start = 0; start <= s.length - length; start++) {
            if (check(start, start + length)) {
                return s.substring(start, start + length);
            }
        }
    }

    return "";
};



function isPalindrome(s) {
    const reversed = s.split("").reverse().join("");
    return s === reversed
}
// console.log(isPalindrome('madam'))

// LEETCODE 4.
// Given signed 32 bit integer x, return x with its digits reversed.
//  if reversing x causes the value to go outside the signed 32bit integer range thn return 0
function reverse(x) {
    let sign = x < 0 ? -1 : 1;
    let reversed = 0;
    x = Math.abs(x);
    while( x > 0 ) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
        reversed = sign * reversed
    }
    if ( reversed <= -Math.pow(2, 31) || reversed > Math.pow(2, 31) -1) {
        return 0
    }
    return reversed
}
const x = 42654
console.log(reverse(x));


// Algorithm design techniques
// 1. Bruce Force
// 2. Greedy e.g = prims algorithms, kruskais algorithm
// 3. Divide and Conquer
// 4. Dynamic Programming e.g fibonacci and climbing staircase
// 5. Backtracking e.h n-queens-problem