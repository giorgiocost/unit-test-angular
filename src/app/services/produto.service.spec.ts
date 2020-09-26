import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto.service';

const produtosFake: any[] = [{
  id: 1,
  nome: 'Teste',
  ativo: true,
  valor: 100,
  imagem: 'celular.jpg'
},
{
  id: 2,
  nome: 'Teste 2',
  ativo: true,
  valor: 200,
  imagem: 'gopro.jpg'
},
{
  id: 3,
  nome: 'Teste 3',
  ativo: true,
  valor: 300,
  imagem: 'laptop.jpg'
},
{
  id: 4,
  nome: 'Teste 4',
  ativo: true,
  valor: 400,
  imagem: 'mouse.jpg'
},
{
  id: 5,
  nome: 'Teste 5',
  ativo: true,
  valor: 500,
  imagem: 'teclado.jpg'
},
{
  id: 6,
  nome: 'Teste 6',
  ativo: false,
  valor: 600,
  imagem: 'headset.jpg'
}];


const produto: any = {
  id: 2,
  nome: 'Teste 2',
  ativo: true,
  valor: 200,
  imagem: 'gopro.jpg'
};

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ProdutoService]
    });
    service = TestBed.get(ProdutoService);
  });

  it('deve retornar uma lista de produtos', () => {
    spyOn(service, 'obterTodos').and.returnValue(produtosFake);

    const result = service.obterTodos('ativos');

    expect(result.length).toBe(6);

    expect(result).toEqual(produtosFake);
  });

  it('deve retornar um produto', () => {
    spyOn(service, 'obterPorId').and.returnValue(produto);

    const result = service.obterPorId(2);

    expect(result).toEqual(produto);
    expect(result.id).toEqual(2);
  });
});
