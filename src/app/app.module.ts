import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMemberRegistrationComponent } from './pages/new-member-registration/new-member-registration.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MembershipStatusComponent } from './pages/membership-status/membership-status.component';
import { RegisterService } from './service/register.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MemberserviceService } from './service/memberservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AddMembershipSchemeComponent } from './pages/add-membership-scheme/add-membership-scheme.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';

import { AdminOnlyPanelComponent } from './pages/admin-only-panel/admin-only-panel.component';
import { AdminLoginService } from './service/admin-login.service';
import { LoginChekServiceService } from './service/login-chek-service.service';
import { HomeComponent } from './home/home.component';
import { AdminOnlyServicesService } from './service/admin-only-services.service';

@NgModule({
  declarations: [
    AppComponent,
    NewMemberRegistrationComponent,
    NavBarComponent,
    MembershipStatusComponent,
    AddMembershipSchemeComponent,
    AdminLoginComponent,
   
    AdminOnlyPanelComponent,
        HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatMenuModule,
    MatButtonModule ,MatInputModule,MatFormFieldModule,MatDatepickerModule,
    MatSelectModule,MatNativeDateModule,ReactiveFormsModule,FormsModule,HttpClientModule ,
    MatCardModule,MatTableModule,MatIconModule
  ],
  providers: [RegisterService,MemberserviceService,AdminLoginService,LoginChekServiceService,AdminOnlyServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
