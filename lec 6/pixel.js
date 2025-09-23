// let arr = [23, 5, 4, 3, 1, 7];
// let ans = [];

// for (let i = 0; i < arr.length; i++) {
//     ans.push(arr[i] * 3);
// }
// console.log(ans);

// 23 0 [ 23, 5, 4, 3, 1, 7 ]
// 5 1 [ 23, 5, 4, 3, 1, 7 ]
// 4 2 [ 23, 5, 4, 3, 1, 7 ]
// 3 3 [ 23, 5, 4, 3, 1, 7 ]
// 1 4 [ 23, 5, 4, 3, 1, 7 ]
// 7 5 [ 23, 5, 4, 3, 1, 7 ]

let arr =[23,5,4,3,1,7]
// const x = arr.map((v,i) => ({v,i}));
// x.sort((a,b) => a.v-b.v);
// const sorted = x.map(x=> x.v);
// console.log(sorted);
let ans = arr.filter((element,index,arr)=> {
    if (element % 2 ==0){
        return true;
    }
    else{
        return false;
    };
});
console.log(ans);