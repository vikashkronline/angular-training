import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './Observable/observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
