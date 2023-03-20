const express = require('express')
const app = express();
const client = require('./dbConnection')
const bodyParser = require('body-parser');
const { query } = require('express');
const PORT = 4000;

//using body parser middleware for sending POST requests to the server
app.use(bodyParser.json())


app.get('/',(req,res)=>{
   res.send('Hello!')
})


app.listen(PORT,()=>{
    console.log(`App listening at the port ${PORT}`);
})



//writing a get request to test database connection
app.get('/getAllProjects',(req,res)=>{
    const allProjects = `SELECT * FROM project`;
    client.query(allProjects,(err,result)=>{
        if(err){
            res.send('Error while retrieving data about projects...')
        }
        else{
            res.send(result.rows)
        }
    })
})