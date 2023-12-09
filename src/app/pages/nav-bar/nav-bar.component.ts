import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MembershipStatusComponent } from '../membership-status/membership-status.component';
import { LoginChekServiceService } from 'src/app/service/login-chek-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers:[MembershipStatusComponent]
})

export class NavBarComponent implements OnInit {
  userInfo:any;
  isLoggedIn:boolean=false;


  constructor(private call  :   MembershipStatusComponent,private authsvc  : LoginChekServiceService) { 
    localStorage.removeItem('jobLoginUser');
    
}
  loaduser1() {
    this.call.loaduser();

  }

  logedin() {
    return this.authsvc.isLogin$;
  }

  

  ngOnInit(): void {
    const userData=localStorage.getItem('jobLoginUser');
  
    if  (userData == null)
    {
      
      this.isLoggedIn=false;
     
      
    }
    else {
    
      this.isLoggedIn=true;
      console.log(userData);
      console.log("i am this loggin " + this.isLoggedIn);
  }
  }

}
