const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', function(req,res){
    console.log('Hello World')// Writes to console
    res.send('Hello World')
})

app.get('/Adithya', function(req,res){
    res.send('Adithya is cool')
})

app.get('/Adithya/:id',function(req,res){ // passing params
    var id = req.params.id
    res.send('Adithya is cool and is ' + id + 'yrs old')
})

app.get('/query',function(req,res){ // using query parameter
    var id = req.query.id
    res.send('Adithya is using query and ans is ' + id)
})

app.listen(9000, function(req,res){
    console.log('Running ....') // To check if the server is running
    
})