import { PartialType } from '@nestjs/mapped-types';
import { CreateListadeseoDto } from './create-listadeseo.dto';

export class UpdateListadeseoDto extends PartialType(CreateListadeseoDto) {}

