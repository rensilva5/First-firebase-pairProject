import { getCeleb } from "./celebrities.js";
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
// app.use(cors())
app.get('/', getCeleb)

app.listen(3001, () => {
    console.log('listenig new route')
});