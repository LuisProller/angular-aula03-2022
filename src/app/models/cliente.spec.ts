import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      new Date(),
      'Nome o Cliente',
      200.00
    )
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

});
