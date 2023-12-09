import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginChekServiceService {
  private isLoginSubject = new BehaviorSubject<boolean>(false);
  isLogin$ = this.isLoginSubject.asObservable();

 
  setLoginStatus(status: boolean) {
    this.isLoginSubject.next(status);
    console.log('Login status:', status);
  }
  


  constructor() {
    this.isLoginSubject.next(false);
   }
}
