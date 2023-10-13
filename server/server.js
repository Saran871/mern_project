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
    password:'Passw0rd@123',
    database:'emp_system'
})
app.get('/employees',(req,res)=>{
    db.query("SELECT * FROM employees",(err,result)=>{
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
app.put('/update',(req,res)=>{
    console.log(req.body.id,req.body.name,'id')
    db.query("UPDATE employees SET name=?,age=?,country=?,position=?,wage=?  WHERE id=?",
    [req.body.name,req.body.age,req.body.country,req.body.position,req.body.wage,req.body.id ],
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
    console.log(req.body.name);
    db.query( "INSERT INTO employees (name,age,country,position,wage) VALUES(?,?,?,?,?)",
    [req.body.name,req.body.age,req.body.country,req.body.position,req.body.wage],
        (err,result)=>{
            if(err){
                res.send(err);
                console.log(err,'create');
            }   else{
                res.send(result);
                console.log("data inserted successful");
            }        
            
        });
})

app.get('/delete/:id',(req, res, next)=>{
    var id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?",
    [id],
    (err, result)=>{
        if(err){
            res.send(err);
            console.log(err,'delete');
        }   else{
            res.send(result);
            console.log("data remove successful");
        }    
    })
})

app.listen(PORT,()=>{
    console.log(`Server Connected on ${PORT}`)
})