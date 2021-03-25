import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetRoutingPaths } from './widget-routing-paths';
import { WidgetPageComponent } from './components/widget-page/widget-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: WidgetRoutingPaths.LANDING_PAGE,
    pathMatch: 'full',
  },
  {
    path: WidgetRoutingPaths.LANDING_PAGE,
    component: WidgetPageComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}
