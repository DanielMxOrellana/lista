import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListadeseosModule } from './listadeseos/listadeseos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ListadeseosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
