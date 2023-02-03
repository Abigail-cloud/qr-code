import { Module } from '@nestjs/common';
import { QrCreateService } from './qr-create.service';
import { QrCreateController } from './qr-create.controller';

@Module({
  controllers: [QrCreateController],
  providers: [QrCreateService]
})
export class QrCreateModule {}
