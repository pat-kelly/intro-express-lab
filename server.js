// import modules

import express from 'express'
import { bikes } from './data/bikes.js';

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs');

// Mount Middleware (app.use)



// Mount routes

app.get('/', (req, res)=>{
  res.redirect('/bikes');
})

app.get('/bikes', (req, res)=>{
  res.render('garage/index', {
    bikes: bikes
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})