const express = require('express')
const app = express();
const PORT = 3001;
const cors = require('cors')
const bodyParser = require('body-parser')


const mysql = require('mysql');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'emp_system'
})
app.get('/employees',(req,res)=>{
    db.query("SELECT * FROM employee",(err,result)=>{
        console.log(result)
        if(err){
            return res.send(err);
            console.log(err);
        }else{
            console.log('get the result')
            return res.send(result);
        }
        
    })
})
app.get('/employees/:id',(req,res)=>{
    console.log(req.params.id)
    var id = req.params.id;
    db.query("SELECT * FROM employee WHERE id=?",[id],(err,result)=>{
        console.log(result);
        if(err){
            return res.send(err);
            console.log(err);
        }else{
            console.log('get the result',req.params.id,result)
            return res.send(result);
        }
        
    })
})
app.put('/update/:id',(req,res)=>{
    // console.log(req.body.id,req.body.name,'id')
    db.query("UPDATE employee SET name=?,age=?,country=?,position=?,wage=?  WHERE id=?",
    [req.body.username,req.body.age,req.body.country,req.body.position,req.body.wage,req.params.id ],
    (err, result)=>{
        if(err){
            
            console.log(err,'err')
            return res.send(err)
        }else{
            console.log('update', result)
            return res.send(result)
        }
    })
})

app.post('/create',(req,res)=>{
    // console.log(req.body,req.body.age,req.body.country,req.body.position,req.body.wage);
    db.query( "INSERT INTO employee (name,age,country,position,wage) VALUES(?,?,?,?,?)",
    [req.body.username,req.body.age,req.body.country,req.body.position,req.body.wage],
        (err,result)=>{
            if(err){
                res.send(err);
                console.log(err,'create');
            }   else{
                res.send(result);                
            }        
            
        });
})

app.delete('/delete/:id',(req, res)=>{
    db.query("DELETE FROM employee WHERE id = ?", req.params.id,
    (err, result)=>{
        console.log(result);
        if(err){
            res.send(err);
            console.log(err,'delete');
        }   else{
            console.log('update', result)
            res.send(result);
            console.log("data remove successful");
        }    
    })
})

app.listen(PORT,()=>{
    console.log(`Server Connected on ${PORT}`)
})