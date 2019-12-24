import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Model} from './repository.model';
import {StaticDatasource} from './static.datasource';



@NgModule({
  providers: [Model, StaticDatasource]
})
export class ModelModule { }
