import {Component, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {MODES, SharedState} from '../sharedState.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  constructor(private model: Model, private state: SharedState) { }

  ngOnInit() {
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(id: number): Product {
    return this.model.getProduct(id);
  }

  deleteProduct(id: number) {
    return this.model.deleteProduct(id);
  }

  editProduct(id: number) {
    this.state.id = id;
    this.state.mode = MODES.EDIT;
  }

  createProduct() {
    this.state.id = undefined;
    this.state.mode = MODES.CREATE;
  }
}
