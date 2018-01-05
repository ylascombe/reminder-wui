import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnvListComponent } from './env-list/env-list.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { EnvironmentService} from './environment.service';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import {EnvironmentDetailService} from './environment-detail.service';
import { StackComponent } from './stack/stack.component';
import {GroupByPipe} from './group-by-pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnvListComponent,
    AppNavbarComponent,
    EnvironmentDetailComponent,
    StackComponent,
    GroupByPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    EnvironmentService,
    EnvironmentDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
