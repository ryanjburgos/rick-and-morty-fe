import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingEnum } from './app-routing.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutingEnum.HOMEPAGE,
  },
  {
    path: AppRoutingEnum.HOMEPAGE,
    loadChildren: () => import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
