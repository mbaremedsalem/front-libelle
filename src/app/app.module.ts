import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PpComponent } from './pp/pp.component';
import { AddPpComponent } from './add-pp/add-pp.component';
import { AddPmComponent } from './add-pm/add-pm.component';
import { PmComponent } from './pm/pm.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PaginationComponent,
    PageDashboardComponent,
    PageLoginComponent,
    PpComponent,
    AddPpComponent,
    AddPmComponent,
    PmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
