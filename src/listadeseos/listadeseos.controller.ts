import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListadeseosService } from './listadeseos.service';
import { CreateListadeseoDto } from './dto/create-listadeseo.dto';
import { UpdateListadeseoDto } from './dto/update-listadeseo.dto';

@Controller('listadeseos')
export class ListadeseosController {
  constructor(private readonly listadeseosService: ListadeseosService) {}

  @Post()
  async create(@Body() createListadeseoDto: CreateListadeseoDto): Promise<any> {
    return this.listadeseosService.create(createListadeseoDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.listadeseosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any | null> {
    return this.listadeseosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateListadeseoDto: UpdateListadeseoDto): Promise<any> {
    return this.listadeseosService.update(+id, updateListadeseoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.listadeseosService.remove(+id);
  }
}
