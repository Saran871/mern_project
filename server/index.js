const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;


app.use(cors())

app.use(bodyParser.u({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: '',
    database: 'emp_system',    
})

app.post('/create',(req,res)=>{
    console.log(req.body, 'name');
    db.query( "INSERT INTO employee (name,age,country,position,wage) VALUES(?,?,?,?,?)",
    [req.body.name,req.body.age,req.body.country,req.body.position,req.body.wage],
        (err,result)=>{
            if(err){
                console.log(err,'create');
                res.send(err);                
            }   else{
                console.log('data inserted successfully');
                res.send(result);
            }                    
        });
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
app.listen(port,()=>{
    console.log(`Server Connected on ${port}`)
})