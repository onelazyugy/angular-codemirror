import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponent } from './sql.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [SqlComponent],
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule,
  ]
})
export class SqlModule { }
