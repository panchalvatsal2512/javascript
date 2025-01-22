JavaScript Data Types:

Primitive types: String, Number, BigInt, Boolean, Undefined, Null, Symbol
Non-primitive types: Object

JavaScript mein 8 primary data types hote hain.
Yeh data types define karte hain ki kisi variable mein kis type ka data store hoga.

1: Primitive Data Types (Call by Value):
Primitive data types wo hote hain jinke values directly store hote hain. Jab tum inhe kisi variable mein assign 
karte ho ya function mein pass karte ho, toh actual value copy hoti hai, na ki reference.

Call by Value ka matlab: Jab tum primitive data type ko assign karte ho ya function mein pass karte ho,
 toh uski copy ban jaati hai, original value change nahi hoti.

1.  string  =>"vatsal" or'vatsal' 

2.  number  => 21 

3.  bigInt => 12345678948725857n

4.  Boolean => true/false

5.  undefined => let accountname;  

6.  null => standalone value means emty value

7. symbol =>  Symbols ka use mainly unique identifiers banane ke liye hota hai.



2. non-primitive datatypes(call by reference)

Non-primitive data types wo hote hain jinmein references store hote hain, na ki actual values. 
Inmein objects, arrays, functions, etc. shamil hote hain.

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
 


/Summary:
Primitive (Call by Value): Value copy hoti hai, original value unaffected rehti hai.
 Non-Primitive (Call by Reference): Reference copy hota hai, original value change ho sakti hai.
 
//datatypes examles

// 1.string
let name = "vatsal";
let person = 'vatsal';

//2. number
let age = 21;
let pi = 3.14;
let negativenumber = -5;

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
console.log(b);  // output:null means emty

// 7.symbol
let symbol1 = Symbol("id");    // Symbol with description "id"
let symbol2 = Symbol("id");    // Another Symbol with same description, but unique
console.log(symbol1 === symbol2);  // Output: false (Different symbols)


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



