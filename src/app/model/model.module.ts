import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Model} from './repository.model';
import {StaticDatasource} from './static.datasource';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [HttpClientModule],
  providers: [Model, StaticDatasource]
})
export class ModelModule { }
