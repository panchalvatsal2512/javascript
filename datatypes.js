/*  JavaScript Data Types:

Primitive types: String, Number, BigInt, Boolean, Undefined, Null, Symbol
Non-primitive types: Object

JavaScript mein 8 primary data types hote hain.
Yeh data types define karte hain ki kisi variable mein kis type ka data store hoga.

1.Primitive Data Types

1.  string  =>"vatsal" or'vatsal' 

2.  number  => 21 

3.  bigInt => 12345678948725857 

4.  Boolean => true/false

5.  undefined => let accountname;  

6.  null => standalone value means emty value

7. symbol => unique


2. non-primitive datatypes...

 object

*example

let user ={
    name:"vatsal",
    age:21,
    Email:"vatsal@gamil.com",
    phoneNo:8141400067,
    ismarried:false
}
console.log(user);
console.log(user.name);
 
*/

//datatypes examles

// 1.string

let name = "vatsal";
let person = 'vatsal';

//2. number

let age = 21;
let pi = 3.14;
let negativenumber = -5;

//3

// 3.BigInt

let bigNumber = 1234567899845611204584562145501454n;

// 4.Boolean

let isMarried = false;
let isAdult = true

// 5.undefined

let a;
console.log(a); // output: undefined

// 6.null

let b = null;
console.log(b);  // output:null

// 7.symbol

let sym = Symbol("description");  // Symbol type
console.log(sym);  // Output: Symbol(description)


// 8.object

let user ={
    name:"vatsal",
    age:21,
    Email:"vatsal@gmail.com",
    phoneNo:8141400067,
    ismarried:false
}
console.log(user);
console.log(user.name);

