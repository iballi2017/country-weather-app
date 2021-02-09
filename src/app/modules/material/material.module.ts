import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule, MatSelectModule,MatFormFieldModule
  ],
  exports: [
    MatToolbarModule, MatSelectModule,MatFormFieldModule
  ]
})
export class MaterialModule { }
