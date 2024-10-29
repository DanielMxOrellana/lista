import { Module } from '@nestjs/common';
import { ListadeseosService } from './listadeseos.service';
import { ListadeseosController } from './listadeseos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ListadeseosController],
  providers: [ListadeseosService],
  imports: [PrismaModule],
})
export class ListadeseosModule {}
