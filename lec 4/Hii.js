// // function add(a,b,c){
// //     console.log("this is the sum");
// //     console.log(a+b+c);
// //     return a+b+c;
// // }
// // ans=add(1,2,3);
// // console.log(ans);
// // let hello = function (n){
// //     if(n==0){
// //         return 1;
// //     }
// //     return n*hello(n-1);
// // }
// // // let ans = fact(5);
// // // console.log(ans);
// // hello(10);
// // let add = function (a, b) {
// //     console.log(a + b);
// //     return a + b + 1;
// // }
// // add(2,4);
// // let add =(a,b)=>{
// //     console.log(a+b);
// //     return a+b+1;
// // }
// // add(2,4);

// //assinment is prime or not
// let isPrime = function(n){
//     if(n<2) return false
//     if (n===2) return true;
//     if(n%2===0) return false;
//     for(let i=3 ; i*i<=n; i+=2){
//         if(n%i===0) return false;
//     }
//     return true;
// }
// // let n=13;
// // console.log(isPrime(n));
// //prime number series
// let primesUpTo = function (Limit){
//     let primes = [];
//     for(let i = 2; i<= Limit; i++){
//         if(isPrime(i)) primes.push(i);
//     }
//     return primes;
// }
// console.log(primesUpTo(50))
// let isPalindrome = function (s) {
//     s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//     let i = 0, j = s.length - 1;
//     while (i < j) {
//                 if (s[i] !== s[j]) return false;
//                 i++; j--;
//     }
//     return true;
// };
// let s = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(s));
// let isPalindromeNumber = function (n) {
//     if (n < 0) return false;
//     let original = n, rev = 0;
//     while (n > 0) {
//                 rev = rev * 10 + (n % 10);
//                 n = Math.floor(n / 10);
//     }
//     return rev === original;
// };
// let num = 12321;
// console.log(isPalindromeNumber(num));

//functions that takes another functions as a (callback)
// let greet = function(callback){
//     console.log("start")
//     callback();
//     console.log("END")
// };
// let sayHello = function(){
//     console.log("hello students")
// };
// greet(sayHello);

// functions that returns another functions (closure)

let multiplier = function(m){
    return function(n){
        return m*n;
    };

};
let double = multiplier(2);
console.log(double(5));