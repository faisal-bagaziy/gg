/*
printing Ahemd, with specifed age
function printName(age)
{
   
    console.log('Ahemd , ' + age)
}

returning the sum of two numebrs
function sum(num1,num2)
{   
    return num1+num2
}

const array = ['Name1','Name2','Name2','Name3','Name4'];
iterate through the array, observe the way we iterate through the loop: 'const name of array'
for (const name of array)
{
    console.log('hi, '+ name)
}


call back function... a function(var-->this var is afunction)




there's diffrent ways to represnt function

 const sendEmail = (var) => 
 {
 }

 function sendEmail(var)
 {
 }

 
 how to create express server 
 npm init -y ---> making a node.js project to use the node.js libraires
 npm i express 
 package json --> define the projct
 pacjage json --> define

 server.get('/name', (req,res) =>
 {
    res.json(name)
 })

server.post({
    req.body
})

fastifay
| pino-colda
 

const express = require('express')
const app = express()
const port = 3000
const restuaurants = ['kfc','kenta'];

server.get('/restuaurants', (req,res) =>
 {
    res.json(restuaurants)
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

// Initallize arrays to getFrom, post, del
const restaurant = ['KFC' , 'Mcdonlads' , 'Shwayt Alkhaleej'];
const toyotaCars = ['Camry' , 'Corlla' , 'Land Cruiser'];
const makeUp = ['makeup1' , 'makeup2' , 'makeup3'];

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/restaurant', async (request, reply) => {
    return restaurant;
})



// Declare a route 2
fastify.get('/toyotaCars', async (request, reply) => {
    return toyotaCars;
  })

// Declare a route 2
fastify.get('/makeUp', async (request, reply) => {
    return makeUp;
  }) 


  fastify.post('/restaurant', async (request, reply) => {
    if (restaurant.indexOf(request.body) === -1)
    {
    restaurant.push(request.body)
    }
    return restaurant;
  }) 

  fastify.delete('/restaurant', async (request, reply) => {
    restaurant.pop()
    return restaurant;
  }) 

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()


/* fasfify_adress -- 0.0.0.0
    next
    
*/