import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import connectDB from './database';

const app = express();

dotenv.config();

const port: number = parseInt(process.env.PORT || '3002', 10);

app.get('/', (request: Request, response: Response) => {
  response.send('Hello Typescript + Node.js + Express');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
connectDB();
