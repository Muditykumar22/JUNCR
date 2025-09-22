// // let x = 90;
// //         x = true;
// //         x = "hasrsh";        
// //         console.log(x);
// //         x = function add(a, b, c) {
// //             console.log("hello inside sum function");
// //             let sum = a + b + c;
// //             return sum;
// //         }
// //         console.log(x);
    
// //        let ans= x(2,3,4);
// //        console.log(ans);
// function ravinder(ravinder){
//     ravinder();
//     console.log("hello rbu");
//     console.log(ravinder);
//     ravinder();
//     console.log(typeof(ravinder));
//     ravinder();
    
//  }
//  let x=()=>{
//      console.log("hi");
//      console.log("bye");
//  };
//  ravinder(x);
let x = () => {
    console.log("callback function");
};
nitin(x);
function nitin(callback) {
    console.log("hii kashmir");  
    console.log(callback);       
    callback();                  
}

nitin(() => {
    console.log("callback function");
});