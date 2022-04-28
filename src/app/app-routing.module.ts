import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-screen/login-screen.module').then(
        (m) => m.LoginScreenModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-screen/home-screen.module').then(
        (m) => m.HomeScreenModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
