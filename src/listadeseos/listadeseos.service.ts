import { Injectable } from '@nestjs/common';
import { CreateListadeseosDto } from './dto/create-listadeseos.dto';
import { UpdateListadeseosDto } from './dto/update-listadeseos.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListadeseosService {
  constructor(private prisma: PrismaService) {}

  create(createListadeseosDto: CreateListadeseosDto) {
    return this.prisma.listadeseos.create({
      data: createListadeseosDto,
    });
  }

  findAll() {
    return this.prisma.listadeseos.findMany();
  }

  findOne(id: number) {
    return this.prisma.listadeseos.findUnique({
      where: { id },
    });
  }

  update(id: number, updateListadeseosDto: UpdateListadeseosDto) {
    return this.prisma.listadeseos.update({
      where: { id },
      data: updateListadeseosDto,
    });
  }

  remove(id: number) {
    return this.prisma.listadeseos.delete({
      where: { id },
    });
  }
}
