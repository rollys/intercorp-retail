import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormComponent} from './client/form.component'
import {ListComponent} from './client/list.component'

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
