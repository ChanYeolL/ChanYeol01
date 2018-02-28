import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home.component';
import {HomeRouterModule} from './home-router.module';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HomeRouterModule,
    NgxEchartsModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {
}
