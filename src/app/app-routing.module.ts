import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameInputComponent } from './name-input/name-input.component';

const routes: Routes = [{ path: 'nameinput', component: NameInputComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
