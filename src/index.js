import express from 'express';
import tips from "./controller/tips_controller.js";
import create from "./controller/creat_controller.js";
import bd from "./infra/bd.js";

const app = express();
app.use(express.json());

tips(app, bd);
create(app, bd);
  
app.listen(3000, ()=>{
    console.log('Rodando porta 3000');
  })