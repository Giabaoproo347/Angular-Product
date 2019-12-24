import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {SHARED_STATE, SharedState} from './sharedState.model';
import {Subject} from 'rxjs';



@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [
    BrowserModule, FormsModule, ModelModule
  ],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [{provide: SHARED_STATE, useValue: new Subject<SharedState>()}]
})
export class CoreModule { }
