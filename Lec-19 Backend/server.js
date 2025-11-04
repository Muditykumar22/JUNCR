const express = require('express')
const app = express()
// port jahan server chalega 
const PORT = 3000;
// body parser (JSON aur HTML form k liye )
app.use(express.json())// JSON bosy ko parse krna hoga vo ye kr dega 
app.use(express.urlencoded({extended: true})); // form - url ko bhi encoded format me parse kr dega 

// Root route - basic welcome
app.get('/', (req,res)=>{
 res.status(200).send('welcome to this page ')
})
//simple hello route
app.get('/hello', (req,res)=>{
    res.status(200).send('helllo from express')
})
//send krte ahi json ka response with an explicit status codee
app.get('/status', (req, res)=>{
    res.status(200).json({ok:true, message:"everything is working"})
})
//params example:/users./1233
app.get('/users/:id', (req,res)=>{
    const {id} = req.params;//url se ham koi bhi di nikal lege 
    res.status(200).send(`you are asked to show the user with :${id}`)
})
//Query example for searching
app.get('/search', (req,res)=>{
    const {q} = req.query;//ravinder dhundho to vo ek ek krke ravinder ka data ko fetch kregi or dikha ki yaha pe ravinder exit krta hai
    res.status(200).send(`you are asked to show the user with :${q}`)
})
//POST(JSON) example : postman me body --> raw> JSON
//{ "name": "nitin", "age":10}
app.post('/submit-json', (req,res)=>{
    const{name , age} = req.body;
    if(!name || typeof age === 'undefined'){
        return res.status(400).json({ok:false, message: 'name aur age dono hi glt hai ya fir ahi hi ni bhejo usko vo bhi json me '})
    }
    return res.status(201).json({ok: true, received: {name, age}});
});
//simple sa htmt form ko (for demo) brower me open krna ho -> submit krta hai submit-form pe
app.get('/form', (req,res)=> {
    res.status(200).send(
        '<!doctype html>' +
        '<html><body>' +
        '<h3>simple form</h3>'+
        '<form method ="POST" action ="/submit-form">' +
        '<input name = "username" placeholder= "username"/>'+
        '<input name = "password" placeholder= "password"/>'+
        '<button type="submit">SEND</button>' +
        '</form>' +
        '</body></html>'
    )

})
//POST (form-irl-encoded)
//exmple : postman me jana body me -> x- www-form-unlencoded
// upar me jo bhi ham html form banayege usko use kr skte hai yaha pe 
app.post('/submit-form', (req,res)=> {
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).send('username aur password bhejo (form-url encoded ni hai) ')
    }
    return res.status(200).send(`recieved for user : ${username, password}`)
})
app.use('*', (req,res)=>{
    res.status(404).send('route not found')
})
//start server
app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
})