import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/app.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const port = 5000;
const server = express();
mongoose.connect('mongodb://localhost/portafolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
server.use(cors());
server.use(bodyParser.json());

server.use(router);

server.listen(port, console.log(`listening at port ${port}`));
