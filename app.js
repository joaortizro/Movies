import SwaggerExpress from 'swagger-express-mw';
import Express from 'express';
import Cors from 'cors';
import Http from 'http';
import dotenv from 'dotenv';

const app = Express();
const cors = Cors();

dotenv.config();

app.use(cors);

module.exports = {app}; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config,(err,swaggerExpress)=>{
  if (err){
    throw err;
  }
  swaggerExpress.register(app);
  try{
    Http.createServer(app).listen(process.env.port);
  }catch (e){
    console.error(e);
  }
  console.log(`API running insecurely on Port ${process.env.port}`);
});
