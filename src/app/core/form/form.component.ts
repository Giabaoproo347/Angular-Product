import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {MODES, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = new Product();
  lastId: number;

  constructor(private  model: Model, private state: SharedState) { }

  get editing(): boolean {
    return this.state.mode === MODES.EDIT;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck() {
    if (this.lastId !== this.state.id) {
      this.product = new Product();
      if (this.state.mode === MODES.EDIT) {
        Object.assign(this.product, this.model.getProduct(this.state.id));
      }
      this.lastId = this.state.id;
    }
  }

  ngOnInit() {
  }

}
