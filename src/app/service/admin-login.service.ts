import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  apiEndPoint: string ='https://freeapi.miniprojectideas.com/api/JobPortal/';

  constructor(private http: HttpClient) { }
  Login(obj:any){
    return this.http.post(this.apiEndPoint+'Login',obj)
   }

}
