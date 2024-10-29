import { Test, TestingModule } from '@nestjs/testing';
import { ListadeseosService } from './listadeseos.service';

describe('ListadeseosService', () => {
  let service: ListadeseosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListadeseosService],
    }).compile();

    service = module.get<ListadeseosService>(ListadeseosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
