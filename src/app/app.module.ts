import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EnvListComponent } from './env-list/env-list.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { EnvironmentService} from './environment.service';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import {EnvironmentDetailService} from './environment-detail.service';
import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvListComponent,
    AppNavbarComponent,
    EnvironmentDetailComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    EnvironmentService,
    EnvironmentDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
