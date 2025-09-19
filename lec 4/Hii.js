// function add(a,b,c){
//     console.log("this is the sum");
//     console.log(a+b+c);
//     return a+b+c;
// }
// ans=add(1,2,3);
// console.log(ans);
// let hello = function (n){
//     if(n==0){
//         return 1;
//     }
//     return n*hello(n-1);
// }
// // let ans = fact(5);
// // console.log(ans);
// hello(10);
// let add = function (a, b) {
//     console.log(a + b);
//     return a + b + 1;
// }
// add(2,4);
// let add =(a,b)=>{
//     console.log(a+b);
//     return a+b+1;
// }
// add(2,4);

//assinment is prime or not
let isPrime = function(n){
    if(n<2) return false
    if (n===2) return true;
    if(n%2===0) return false;
    for(let i=3 ; i*i<=n; i+=2){
        if(n%i===0) return false;
    }
    return true;
}
// let n=13;
// console.log(isPrime(n));
//prime number series
let primesUpTo = function (Limit){
    let primes = [];
    for(let i = 2; i<= Limit; i++){
        if(isPrime(i)) primes.push(i);
    }
    return primes;
}
console.log(primesUpTo(50))