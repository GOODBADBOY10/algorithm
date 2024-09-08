// Our language to be used will be javascript
// What is data structure: It is a way to store and organize data so that it can be used efficiently
// why data structures: 1. it helps solve problem in a more efficient way 2. DOM- Tree data structure 3. Browser back and forward
// 4. OS job scheduling- queue data structure

// BUILT-IN DATA STRUCTURE
// ARRAYS- a array is a data structure that can hold a collection of values
const arr = [1, 2, 3, 'ademola']
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();
// for (const item of arr) {
//     console.log(item);
// }

// map, filter, reduce, concat, slice, splice;
// Array big -0 time complexity
// Insert / remove from end - O(1) --- constant e.g push/pop
// Insert / remove from begining - O(n) --- linear e.g shift/unshift/concat/slice/splice/forEach/map/filter/reduce
// Access - O(1) ----- constant
// Search - O(n) ---- linear






// OBJECTS- an object is an unordered collection of key value pairs. an object is not iterable, you cant use with a for loop
// const obj = {
//     name: "ademola",
//     age: 25,
//     'key-three': true,
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// obj.hobby = 'footbal';
// delete obj.hobby
// console.log(obj);
// obj.sayName();
// Object.keys(), .values(), .entries();
// object big-o time coplexity
// Insert - O(1) --- constant e.g 
// Remove - O(1) --- constant e.g 
// Access - O(1) ----- constant
// Search - O(n) ---- linear e.g Object.keys(), .values(), .entries();







// SET DATA STRUCTURE
// a set is a data structure that can hold a collection of values. the values most be unique. it can contain a mix of diffterent data types
// it is iterable
// differences between array and set
// insertion order is maintained in arrays but nit the case with sets
// searching and deletting an element in set is faster compared to arrays
// const set = new Set([1, 2, 3])
// set.add(4);
// console.log(set.has(4));
// set.delete(3);
// console.log(set.size);
// set.clear();
// for (const item of set) {
//     console.log(item);
// }








// MAP
// a map is an unordered collection of key value pairs. they are iterable. key value pairs can be of any type
// you can only store data in maps
// const map = new Map([['a', 1], ['b', 2]])
// map.set(['c', 3])
// map.delete(['c', 3])
// console.log(map.size)
// map.clear();
// for (const [key,value] of map) {
//     console.log(`${key}: ${value}`);
// }






// STACK DATA STRUCTURE
// the stactk data structure is a sequnetial collection of elements that follows the principle of last in first out(LIFO)
// stack is an abstract data type. it is defined by its behavior e.g push and pop;
// usage: 1. browser history tracking, 2. undo operation when typing, 3. expressions conversion, 4. callstack in js runtime
// QUEUE DATA STRUCTURE
// is a sequnetial collection of elements that follows the principle of first in first out(FIFO)
// enqueue and dequeue
// usage: printers, cpu task scheduling, callback queue in js runtime
// QUEUE IMPLEMENTATION
// 1. peek() 2. isEmpty() 3. size() 4. print() 5. dequeue() 6. enqueue()

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0]
        }
        return null;
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue()
console.log(queue.isEmpty());
