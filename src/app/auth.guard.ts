import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { LoginChekServiceService } from './service/login-chek-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginChekServiceService, private router: Router) {}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  canActivate(): Observable<boolean> {
    return this.authService.isLogin$.pipe(
      take(1),
      map((isLogin) => {
        if (isLogin) {
          return true;
        } else {
          this.router.navigateByUrl('/admin');
          return false;
        }
      })
    );
  }
  
}
