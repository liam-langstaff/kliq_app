import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromotionsController } from './promotions/promotions.controller';

@Module({
  imports: [],
  controllers: [AppController, PromotionsController],
  providers: [AppService],
})
export class AppModule {}
