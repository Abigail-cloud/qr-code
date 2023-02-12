/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, Res } from '@nestjs/common';
import { createRequire } from 'module';
import { PrismaService } from 'prisma/prisma.service';
import { qrDto } from './dto/qr-create.dto';
import * as qrcode from 'qrcode';
import * as fs from 'fs';
import Jimp from "jimp";
import jsqrcode from "jsqrcode";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



@Injectable()
export class QrCreateService {
    constructor (private prisma : PrismaService) {}

    async qrGEnerate () {
         const data = await this.retrieveData();
  const chunks = this.splitData(data);

  for (const chunk of chunks) {
    setInterval(async () =>{
      const qrCode = await this.generateQRCode(chunk);
      console.log(qrCode)  
       await this.storeQRCode(qrCode);
    }, 10000)
   
  }
    }

async qrScan (){
    await Jimp.read('./public/image/qr_code.png')
  .then(image => {
    const buffer = image.getBufferAsync(Jimp.MIME_PNG);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    jsqrcode.decode(buffer, width, height, function(err: any, data: any) {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
  })
  .catch(err => {
    console.error(err);
  });
    }


    //Helper Function
   async retrieveData() {
        const data = await prisma.qrCode.findMany();
      
        return data;
      }

   splitData(data: string | any[]) {
        const chunkSize = 1000;
        const chunks = [];
      
        for (let i = 0; i < data.length; i += chunkSize) {
          chunks.push(data.slice(i, i + chunkSize));
        }
      
        return chunks;
      }

      async  generateQRCode(data: string | qrcode.QRCodeSegment[]) {
        const qrCode = await qrcode.toDataURL(data);
      
        return qrCode;
      }

      async storeQRCode(qrCode: string | NodeJS.ArrayBufferView) {
        fs.writeFileSync(`./public/image/qr_code.png`, qrCode);
      }
            
}
