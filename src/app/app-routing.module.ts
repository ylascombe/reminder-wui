import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';

const routes: Routes = [
  { path: 'environment/:id', component: EnvironmentDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
