import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SqlComponent } from './sql/sql.component';

const routes: Routes = [
  {
    path: '',
    component: SqlComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
