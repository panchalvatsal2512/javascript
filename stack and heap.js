// /********************************************stack and heap memeory*************************************/

// // stack(primitive),heap(non-primitive)


// // stack ke adnar koi bhi chizz lengy toh uski copy milegi
// // heap ke adnar koi bhi chizz lengy toh uska Referance milega means jo bhi change karogy woh original value me change hoga

// // 1. Stack Memory:



// Primitive Types stack memory mein store hote hain.
// Primitive data types: number, string, boolean, null, undefined, symbol, bigint.
// Stack memory mein sirf value ki copy store hoti hai.
// Jab value copy hoti hai, toh original value par koi effect nahi padta.

let x = 50; // Stack memory mein x ki value store hoti hai
let y = x;  // x ki copy banti hai aur y mein store hoti hai

y = 100;    // y ka value badla, x unaffected raha

console.log(x); // Output: 50
console.log(y); // Output: 100



// 2. Heap Memory:

// Non-primitive data types: objects, arrays, functions.
// Heap memory mein reference (pointer) store hota hai, jo actual data ki location ko point karta hai.
// Jab reference change karte ho, toh original object bhi modify ho jata hai.



let obj1 = {
    name:"vatsal;",
    email:"vatsal@.com"
}

let obj2 = obj1; // Heap mein reference milega, dono same object ko point karte hain
    obj2.name = "panchal" //Original object ko change karega

// console.log(obj1);//output:panchal
// console.log(obj2);// output:panchal
