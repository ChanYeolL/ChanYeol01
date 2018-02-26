import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
