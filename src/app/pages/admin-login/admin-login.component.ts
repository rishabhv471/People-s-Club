import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/service/admin-login.service';
import { LoginChekServiceService } from 'src/app/service/login-chek-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

loginObj:any ={
    "UserName": "",
    "Password": ""
  };
  CorrectPassword:any
  isLogin:boolean=false;
  // sachin@gmail.com
  // 9988998866

  constructor(private JobSrv:AdminLoginService,private authsvc :LoginChekServiceService,
              private router:Router ) { }
  ngOnInit() {
    
  }
  // onLogin()
  // {
  //   this.JobSrv.Login(this.loginObj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert('User logged in successfully')
  //       localStorage.setItem('jobLoginUser',JSON.stringify(res.data));
  //       console.log(res.data);
  //       const allowedPassword = "9988998866"
  //     //   const allowedStatuses = ['gold', 'regular', 'platinum'];
  //     // this.userList = res.data.filter((item: any) => allowedStatuses.includes(item.experienceStatus));
  //     this.CorrectPassword=   res.data.filter((item: any) =>allowedPassword.includes(item.Password));
  //       if (this.CorrectPassword=='9988998866'){
  //         this.isLogin=true;

  //       }
  //       console.log(this.CorrectPassword);
  //       console.log(this.isLogin);
        
        
  //     }
  //     else{
  //       alert(res.message)
  //     }

  //   })

  // }

  onLogin() {
    this.JobSrv.Login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        
        alert('User logged in successfully');
        localStorage.setItem('jobLoginUser', JSON.stringify(res.data));
  
     
        if (typeof res.data === 'object' && res.data !== null) {
          const allowedUserName = 'sachin@gmail.com';
          const allowedPassword = '9988998866';
  
         
          if (res.data.userName === allowedUserName && res.data.password === allowedPassword) {
            this.authsvc.setLoginStatus(true); // Set login status to true
            this.router.navigateByUrl('/adminPanel'); 
          } else {
            this.authsvc.setLoginStatus(false); 
            alert('Invalid username or password'); 
          }
        } else {
          
          this.authsvc.setLoginStatus(false); 
          console.error('Invalid response data:', res.data);
          alert('Invalid response data. Please try again.'); 
        }
      } else {
      
        this.authsvc.setLoginStatus(false); 
        alert(res.message); 
      }
    });
  }
  
  
  
}
