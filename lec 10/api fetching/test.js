function dommanipulation(data){
//data is objects

 let main= document.getElementsByTagName("main")[0];
        data.map((Element) => {
            // console.log(Element);
         let a = `  
        <div>
        <p>ID=${Element.userId}</p>
        <p>mame=${Element.id}</p>
        <p>email=${Element.title}</p>
        <p>email=${Element.completed}</p>

         </div>
         `;
            // console.log(a);
           let section= document.createElement("section");
            section.innerHTML=a;
            // main.append(section);
            main.appendChild(section);

        })
}

async function getData(){
   try {
     let responce=await fetch("https://jsonplaceholder.typicode.com/todos");
    let data= await responce.json();
    console.log(data);
    dommanipulation(data);
   } catch (error) {
     console.log("something wrong");
   }
}
getData();