import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppService} from './app.service';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarMenuComponent } from './header/sidebar-menu/sidebar-menu.component';
import { TreeviewMenuComponent } from './header/treeview-menu/treeview-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
