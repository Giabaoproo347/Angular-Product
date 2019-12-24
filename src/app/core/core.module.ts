import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {SharedState} from './sharedState.model';



@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [
    BrowserModule, FormsModule, ModelModule
  ],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [SharedState]
})
export class CoreModule { }
