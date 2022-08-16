import 'dotenv/config';
import express, { Request, Response } from 'express';
import router from './routes'
const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    
})