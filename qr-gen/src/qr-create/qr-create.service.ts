/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, Res } from '@nestjs/common';
import { createRequire } from 'module';
import { PrismaService } from 'prisma/prisma.service';
import { qrDto } from './dto/qr-create.dto';
import * as qrcode from 'qrcode';


@Injectable()
export class QrCreateService {
    constructor (private prisma : PrismaService) {}

    async qrGEnerate () {
         const data = "https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4.js";
        //  const qrCode = await qrcode.toDataURL(data);
         setInterval(async () => {
            const qrCode = await qrcode.toDataURL(data);
            console.log(qrCode);
            
          }, 20000);

         
        //  return {qrCode};
    }

    async qrScan () {
        return " "
    }


    
      
}
