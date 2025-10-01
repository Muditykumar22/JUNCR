// console.log("arjun");
// console.log("ridhika");


// setTimeout(() => {
//     console.log("saurabh");
//     console.log("ashish");
// }, 2000);

// setTimeout(()=>{
//     console.log("rbu");
// },2000)


// console.log("vikas");
// console.log("patel");

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((data) => {
  
  console.log(data);
  let head=document.getElementsByTagName("h1");
 head[0].innerHTML=data[1].name;
})