import multer from 'multer'
import path, { join, resolve } from 'path'
import { randomBytes } from 'crypto'
import { Request } from 'express'

export const MulterConfig = {
    dest: resolve(__dirname, '..', '..', 'tmp', 'uploads')
}