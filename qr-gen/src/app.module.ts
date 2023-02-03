/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { QrCreateModule } from './qr-create/qr-create.module';


@Module({
  imports: [QrCreateModule, PrismaModule],
  
})
export class AppModule {}
