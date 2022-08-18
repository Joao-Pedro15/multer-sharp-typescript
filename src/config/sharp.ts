import { Response, Request, NextFunction } from 'express';
import sharp from 'sharp'
import { join } from 'path'

export function resizeImage(request:Request, response: Response, next: NextFunction) {
    const { width } = request.query
    const compressImagePath = join(__dirname, '..', '..', 'images', new Date().getTime() + '.jpg')
    sharp(request.file?.path).resize({ width: Number(width) }).toFile( compressImagePath, (error) => {
        if(error)return response.status(400).send(error)
        return response.status(201).send('Success!')
    } )
}