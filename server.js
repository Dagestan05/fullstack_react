import config from './config';
import apiRouter from './api'

import express from 'express';
const server = express();

//view engines
server.set("view engine", 'ejs');

//ROUTES
server.get("/", (req, res) =>{
  const context = {content: "Hello Express EJS"}
  res.render('index', context)
});

//EXPRESS MIDDLEWARE
server.use('/api', apiRouter);
server.use(express.static(__dirname + 'public'));






server.get("/about.html", (req, res) =>{
  fs.readFile('./about.html', (err, data)=>{
    res.send(data.toString())
  })
});













server.listen(config.port, ()=>{
  console.log("Express server is listening on ", config.port)
})