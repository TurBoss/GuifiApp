import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'nodes',
    loadChildren: './nodes/nodes.module#NodesPageModule'
  },
  {
    path: 'node-details',
    loadChildren: './node-details/node-details.module#NodeDetailsPageModule'
  },
  {
    path: 'device-details',
    loadChildren: './device-details/device-details.module#DeviceDetailsPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
