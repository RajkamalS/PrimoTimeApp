import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    //canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [ AuthGuardService ]
  },
 {
    path: 'login',
   component: LoginComponent,
   //canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'login',
    //canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent,LoginFormComponent]
})
export class AppRoutingModule { }
