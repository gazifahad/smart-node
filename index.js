const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! hi world,hlw hlw')
});
const users = [
    { id: 1, name: "shabana", email: "something@gmail.com", phone: "0175757575" },
    { id: 2, name: "sabnur", email: "sosabnur@gmail.com", phone: "0175757575" },
    { id: 3, name: "sahana", email: "somahana@gmail.com", phone: "0175757575" },
    { id: 4, name: "shakira", email: "soshakira@gmail.com", phone: "0175757575" },
    { id: 5, name: "janina", email: "sojanina@gmail.com", phone: "0175757575" },
    { id: 6, name: "manina", email: "somanina@gmail.com", phone: "0175757575" },
    { id: 7, name: "shabana", email: "something@gmail.com", phone: "0175757575" }
]
app.get('/users', (req, res) => {
    
   if(req.query.name){
    const search=req.query.name.toLowerCase();
    const matched=users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(matched);
   }
   else{
    res.send(users);
}
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
});
app.post('/user', (req, res) => {
    console.log('req', req.body);
    users.push(users);
    const id=users.length+1;
    res.send(req.body)

})
app.listen(port, () => {
    console.log("listening to", port);
});