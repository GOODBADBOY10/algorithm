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

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null;
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.dequeue())
// queue.print();
// console.log(queue.peek())



// Optimized implemetation of queue
// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0;
//         this.front = 0;
//     }
//     enqueue(element) {
//         this.items[this.rear] = element;
//         this.rear++;
//     }
        
//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     isEmpty() {
//         return this.rear - this.front === 0
//         }
        
//         peek() {
//             return this.items[this.front]
//         }
//         size() {
//              return this.rear - this.front
//          }
//          print() {
//             console.log(this.items);
//          }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.dequeue())
// queue.print();
// console.log(queue.peek())
// their time complexity is linear




// CIRCULAR QUEUE
// it also follows the fifo principle. it suppports enqueue and dequeue;
// it is used in clock, streaming data, traffic lights implentation
// enqueue, dequeue, isFull, isEmpty, peek, size, print
// class Queue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = -1
//         this.front = -1
//     } 

//     isFull() {
//         return this.currentLength === this.capacity
//     }
//     isEmpty() {
//         return this.currentLength === 0
//     }
//     enqueue(element) {
//         if(!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength  += 1
//             if(this.front === -1) {
//                 this.front = this.rear
//             }
//         }
//     }
//     dequeue() {
//         if(this.isEmpty()) {
//             return null;
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if(this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }
//         return item;
//     }
//     peek() {
//         if(!this.isEmpty()) {
//            return this.items[0]
//         }
//         return null;
//     }
//     print() {
//         if(this.isEmpty()) {
//             console.log('queue is empty')
//         } else {
//             let i
//             let str = ''
//             for (let i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
//                 str += this.items[i] + ''
                
//             }
//             str += this.items[i]
//             console.log(str);
//         }
//     }
// } 


// const queue = new Queue(5)
// console.log(queue.isEmpty())
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.isFull())
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.print();






// LINKED LIST

// a linked list is a linear data structure that included a series of connected node
// each node consist of a data value and a pointer that points to the next node
// the list elements can be easily inserted or removed without reallocation or reorganization of structure
// random acess of elements is noit feasible
// it supports: insertion, deletion, searching
// applications: used in stacks and queue, image viewer
// 1. Node class
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }



    isEmpty() {
        return this.size === 0
    }




    getSize() {
        return this.size
    }




    // it has a constant time complexity
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }



    // it has a linear time complexity
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        } 
        this.size++
    }



    insert(value, index) {
        if(index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }



    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }




    removeValue(value) {
        if(this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }




    search(value) {
        if(this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr) {
            if(curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }



    reverse() {
        let prev = null
        let curr = this.head
        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }



    print() {
        if(this.isEmpty()) {
            console.log('The list is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.append(10)
list.print()
list.append(20)
list.append(30)
list.print();
