import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacesPipe } from './convertToSpaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    convertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    FormsModule,
    CommonModule,
    convertToSpacesPipe
  ]
})
export class SharedModule { }
