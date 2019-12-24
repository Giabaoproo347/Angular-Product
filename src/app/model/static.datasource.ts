import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class StaticDatasource {
  private data: Product[] = [
    new Product(1, 'IPhone', 'Mobile', 100),
    new Product(2, 'Samsung', 'Mobile', 200),
    new Product(3, 'Vivo', 'Mobile', 300),
    new Product(4, 'VSmart', 'Mobile', 400),
    new Product(5, 'Tesla', 'Car', 500)
  ];

  getData(): Product[] {
    return this.data;
  }
}
