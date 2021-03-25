import { RouterModule, Routes } from '@angular/router';
import { AppRoutePaths } from './app-route-paths';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: AppRoutePaths.WIDGETS, pathMatch: 'full' },
  {
    path: AppRoutePaths.WIDGETS,
    loadChildren: () => import('./modules/widget/widget.module').then((m) => m.WidgetModule),
  },
  {
    path: '**',
    redirectTo: AppRoutePaths.WIDGETS,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
