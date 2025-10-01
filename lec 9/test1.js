// function fetchData(callback){
//     // let callback = function(result){
//     //     return result
//     // }
//     console.log("hello english ma'am")
//     setTimeout(()=> {
//         callback(10);
//         console.log(callback);
//         callback(function(x){
//             console.log("hello data")
//         })
//     })

// }
// fetchData(function (result) {
//     console.log(result);
// });
// asyncFunc1((result1) => { 
//     asyncFunc2(result1, (result2) => { 
//         asyncFunc3(result2, (result3) => { 
//             // Do something with result3 
//         }); 
//     }); 
// }); 

const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success)
        resolve("success");
    else
        reject("error");
});

// Handling the first promise
promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));

console.log(promise);            // Will show pending or resolved promise
console.log(typeof promise);     // object

// ✅ Another promise with setTimeout
let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        let ans = 75;
        resolve(ans);
    }, 3000);
});

a.then((roll) => {
    console.log(roll);
    let head = document.getElementsByTagName("h1");
    if (head.length > 0) {
        head[0].innerHTML = roll;   // Will change <h1> text if present
    }
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("session completed");
    });