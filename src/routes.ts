import { Router, Request, Response } from 'express'
const router = Router()
import multer from 'multer'
import { join } from 'path'
import sharp from 'sharp'
import { MulterConfig } from './config/multer'

router.get('/', (request:Request, response: Response) => {
    return response.status(200).json({hello: 'world'})
})

router.post('/posts', multer(MulterConfig).single('file'), (request: Request, response: Response) => { 
    let compressImagePath = join(__dirname, '..', 'images', new Date().getTime() + '.jpg')
    sharp(request.file?.path).resize(640, 480).toFile( compressImagePath, (error) => {
        if(error)return response.status(400).send(error)
        return response.status(201).send('Success!')
    } )
    return response.status(201)
})

export default router 