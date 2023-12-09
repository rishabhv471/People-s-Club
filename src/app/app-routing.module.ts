import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMemberRegistrationComponent } from './pages/new-member-registration/new-member-registration.component';
import { MembershipStatusComponent } from './pages/membership-status/membership-status.component';
import { AddMembershipSchemeComponent } from './pages/add-membership-scheme/add-membership-scheme.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminOnlyPanelComponent } from './pages/admin-only-panel/admin-only-panel.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,  // HomeComponent is the default route component
    pathMatch: 'full'
  },
  {
    path:'register',
    component:NewMemberRegistrationComponent
  },
  {
    path:'membership',
    component:MembershipStatusComponent
  },
  {
    path:'admin/modify',
    component:AddMembershipSchemeComponent
  },
  {
    path:'admin',
    component:AdminLoginComponent,
    
  },
  {
    path:'adminPanel',
    component:AdminOnlyPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
