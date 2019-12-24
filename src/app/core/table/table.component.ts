import {Component, Inject, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {Product} from '../../model/product.model';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  // constructor(private model: Model, private state: SharedState) { }
  constructor(private model: Model, @Inject(SHARED_STATE) private observe: Observer<SharedState>) { }

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
    // this.state.id = id;
    // this.state.mode = MODES.EDIT;
    this.observe.next(new SharedState(MODES.EDIT, id));
  }

  createProduct() {
    // this.state.id = undefined;
    // this.state.mode = MODES.CREATE;
    this.observe.next(new SharedState(MODES.CREATE));
  }
}
