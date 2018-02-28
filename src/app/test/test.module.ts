import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TestRouterModule} from './test-router.module';
import {TestComponent} from './test.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TestRouterModule,
    NgxEchartsModule,
  ],
  declarations: [
    TestComponent
  ],
  exports: [TestComponent],
  providers: []
})
export class TestModule {
}
