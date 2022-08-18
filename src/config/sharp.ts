import { Response, Request, NextFunction } from 'express';
import sharp from 'sharp'
import { resolve } from 'path'
import { readdirSync } from 'fs'

export async function resizeImage(path:any, width:number) {
   
    const pathFile = resolve(__dirname, '..', '..', 'tmp', 'resizeImages')
    sharp(path).resize(200, 200).toFile(pathFile, (error:Error | null , data:any) => {
        if(error) {
            console.log(error)
            
        }
    })   
}
