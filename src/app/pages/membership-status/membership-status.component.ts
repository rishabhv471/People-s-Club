import { Component, OnInit } from '@angular/core';
import { MemberserviceService } from 'src/app/service/memberservice.service';

@Component({
  selector: 'app-membership-status',
  templateUrl: './membership-status.component.html',
  styleUrls: ['./membership-status.component.css']
})
export class MembershipStatusComponent implements OnInit {

  constructor(private memberObj : MemberserviceService) { }

  ngOnInit(): void {
    
    this.loaduser();

  } 
  userList: any[] = [];
  //table ke lie
  displayedColumns: string[] = [
    'position',
    'fullName',
    'experienceStatus',
    'emailId',
    'mobileNo',
    // 'location',
    'action',
  ];

 

  loaduser() {
    this.memberObj.GetActiveUsers().subscribe((res: any) => {
      const allowedStatuses = ['gold', 'regular', 'platinum'];
      this.userList = res.data.filter((item: any) => allowedStatuses.includes(item.experienceStatus));
      console.log(this.userList);
    });
  }

  modifyUser(userId: number) {
    this.memberObj.getUserById(userId).subscribe((user: any) => {
      // Implement logic to handle modification, e.g., open a dialog with user details
      console.log('Modify user:', user);
    });
  }
}  
