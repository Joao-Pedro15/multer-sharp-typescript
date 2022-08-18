import { Router, Request, Response } from 'express'
const router = Router()
import multer from 'multer'
import { join } from 'path'
import sharp from 'sharp'
import { MulterConfig } from './config/multer'
import { resizeImage } from './config/sharp'

router.get('/', (request:Request, response: Response) => {
    return response.status(200).json({hello: 'world'})
})

router.post('/posts', multer(MulterConfig).single('file'), resizeImage)

export default router 