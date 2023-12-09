import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberserviceService {
  apiEndPoint: string ='https://freeapi.miniprojectideas.com/api/JobPortal/';

  constructor(private http: HttpClient) { }

  GetActiveUsers()
   {
    return this.http.get(this.apiEndPoint+'GetAllJobSeeker')
   }
  //  https://freeapi.miniprojectideas.com/api/JobPortal/GetJobSeekerById?id=39
  
  getUserById(id:number)
  {
   return this.http.get(this.apiEndPoint+'GetJobSeekerById?id='+id)
  }

}
