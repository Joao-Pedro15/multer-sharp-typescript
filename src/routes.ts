import { Router, Request, Response } from 'express'
const router = Router()
import multer from 'multer'
import { MulterConfig } from './config/multer'

router.get('/', (request:Request, response: Response) => {
    return response.status(200).json({hello: 'world'})
})

router.post('/posts', multer(MulterConfig).single('file'), (request: Request, response: Response) => {
    return
})

export default router 