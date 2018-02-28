import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {CustomScrollbarModule} from './custom-scrollbar.module';
import {TreeviewMenuComponent} from './treeview-menu/treeview-menu.component';
import {HomeComponent} from '../home/home.component';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainRoutingModule} from './main-routing.module';
import {HomeModule} from '../home/home.module';
import {TestModule} from '../test/test.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HomeModule,
    TestModule,
    MainRoutingModule,
    CustomScrollbarModule,
  ],
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent,
  ],
  exports: [MainComponent],
  providers: []
})
export class MainModule {
}

