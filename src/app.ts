import 'dotenv/config';
import express, { Request, Response } from 'express';
const app = express();
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (request: Request, response: Response) => {
    response.send('Hello world')
} )

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    
})