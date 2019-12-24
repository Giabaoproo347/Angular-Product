import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = new Product();
  // lastId: number;
  // constructor(private  model: Model, private state: SharedState) { }
  constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
  stateEvents.subscribe((update) => {
    this.product = new Product();
    if (update.id !== undefined) {
      Object.assign(this.product, this.model.getProduct(update.id));
    }
    this.editing = update.mode === MODES.EDIT;
  });
  }

  editing: boolean = false;

  // get editing(): boolean {
  //   return this.state.mode === MODES.EDIT;
  // }

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
  // ngDoCheck() {
  //   if (this.lastId !== this.state.id) {
  //     this.product = new Product();
  //     if (this.state.mode === MODES.EDIT) {
  //       Object.assign(this.product, this.model.getProduct(this.state.id));
  //     }
  //     this.lastId = this.state.id;
  //   }
  // }

  ngOnInit() {
  }

}
