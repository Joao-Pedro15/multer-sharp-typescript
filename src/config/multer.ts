import multer from 'multer'
import { join, resolve } from 'path'

export const MulterConfig = {
    dest: resolve(__dirname, '..', '..', 'tmp', 'uploads')
}