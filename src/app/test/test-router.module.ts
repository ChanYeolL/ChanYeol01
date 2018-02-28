import {NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';

/**
 * 主页路由
 */
const homeRoutes: Routes = [
  {path: '', component: TestComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRouterModule {
}
