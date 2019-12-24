import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {TableComponent} from './core/table/table.component';
import {FormComponent} from './core/form/form.component';

@NgModule({
  imports: [BrowserModule, ModelModule, CoreModule],
  bootstrap: [TableComponent, FormComponent]
})
export class AppModule { }
