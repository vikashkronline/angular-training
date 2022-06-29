import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
