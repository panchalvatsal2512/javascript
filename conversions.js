// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

// 1=> true;
// 0=> false;
// "vatsal" => true;
// "" => false


// ***********************Conversions**************************//

// Conversion ka matlab hai kisi value ko ek data type se doosre data type mein badalna

// example 1 : number to String
let score = 33;
console.log(score);
console.log(typeof score);
// // convert karne ke liye ek or new variable banana padega
let numbertostring = String(score);
console.log(numbertostring);
console.log(typeof numbertostring);



//example 2:string to number

let total = "33"
console.log(total);
console.log(typeof total);  

let stringtonumber = Number(total)
console.log(stringtonumber);
console.log(typeof stringtonumber);



// example 3:
let login = true
console.log(typeof login);

let logintostring = String(login)
console.log(logintostring);
console.log(typeof logintostring);

// example 4:


let user = "vatsal";
console.log(user);
console.log(typeof user);

let userToNumber = Number(user)
console.log(userToNumber);
console.log(typeof userToNumber);


//******************************** Opertaions ******************************************* */

let a = 10
        b = 20
     console.log("10"+a+b);  //pahle string hogi toh toh uske baad ki value sab string me convert ho jaegi
     console.log(a+b+"10");   // isme pahle value + hogi baad me woh value string ke sath add hogi


