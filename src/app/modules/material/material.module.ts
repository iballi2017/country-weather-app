import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule, MatSelectModule,MatFormFieldModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule
  ],
  exports: [
    MatToolbarModule, MatSelectModule,MatFormFieldModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule
  ]
})
export class MaterialModule { }
