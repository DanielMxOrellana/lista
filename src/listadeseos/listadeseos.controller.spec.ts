import { Test, TestingModule } from '@nestjs/testing';
import { ListadeseosController } from './listadeseos.controller';
import { ListadeseosService } from './listadeseos.service';

describe('ListadeseosController', () => {
  let controller: ListadeseosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListadeseosController],
      providers: [ListadeseosService],
    }).compile();

    controller = module.get<ListadeseosController>(ListadeseosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
