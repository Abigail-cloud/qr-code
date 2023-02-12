/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
// import { Body, Get } from '@nestjs/common/decorators';
// import { qrDto } from './dto/qr-create.dto';
import { QrCreateService } from './qr-create.service';


@Controller('qr-create')
export class QrCreateController {
  constructor(private readonly qrCreateService: QrCreateService) {}

  @Get('qrGenerate')
  qrGenerate(){
    return this.qrCreateService.qrGEnerate()
  }

  @Post('qrScan')
  qrScan(qrCodeImage: any){
    return  this.qrCreateService.qrScan(qrCodeImage)
  }
}
