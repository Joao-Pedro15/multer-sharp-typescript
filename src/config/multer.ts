import multer from 'multer'
import { resolve } from 'path'
import { randomBytes } from 'crypto'
import { Request } from 'express'

export const MulterConfig = {
    dest: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (request, file:Express.Multer.File, callback)  =>  {
            callback(null,  resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (request, file, callback) => {
            randomBytes(16, (err:Error | null, hash:Buffer) => {
                if(err) return err
                const fileName = `${hash.toString('hex')}-${file.originalname}`
                callback(null, fileName)
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (request: Request, file:Express.Multer.File, callback:(Error:Error | null | any , isSuccess: boolean) => void) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]
        if(allowedMimes.includes(file.mimetype)){
            callback(null, true)
        }else {
            callback(new Error('Invalid file type.'), false)
        }
    },
}

