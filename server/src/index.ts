import express, { Request, Response } from 'express';
import cors from "cors";
import { config } from 'dotenv';
import { dbConnect } from './lib/dbConnect';
import { compilerRouter } from './routes/compilerRouter';
const app = express()

app.use(express.json());
app.use(cors());
config();

app.get("/",(req: Request,res: Response)=>{
    return res.status(200).send("Ok");
})

app.use("/compiler", compilerRouter);

dbConnect();
app.listen(4000, ()=>{
    console.log(process.env.TEST);
    console.log("http://localhost:4000");
})