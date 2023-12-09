import { Component } from '@angular/core';
import { LoginChekServiceService } from './service/login-chek-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyClubProject';
  isLoggedIn:boolean=false;
  userInfo :any;
  constructor()
    {
    // const userData=localStorage.getItem('jobLoginUser');
    //   if  (userData == null)
    //   {
    //     this.isLoggedIn=false;
    //   }
    //   else {
    //     this.isLoggedIn=true;
    //     this.userInfo=JSON.parse(userData);
        
    //   }
    }

}

