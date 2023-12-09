import { Component, OnInit } from '@angular/core';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { LoginChekServiceService } from 'src/app/service/login-chek-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MembershipStatusComponent } from '../membership-status/membership-status.component';
import { MemberserviceService } from 'src/app/service/memberservice.service';
@Component({
  selector: 'app-admin-only-panel',
  templateUrl: './admin-only-panel.component.html',
  styleUrls: ['./admin-only-panel.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000)),
    ]),
  ],
  providers:[MembershipStatusComponent]
})

export class AdminOnlyPanelComponent implements OnInit {

  constructor(private authsvc  : LoginChekServiceService ,
     private obje:MembershipStatusComponent,private memberObj : MemberserviceService ) { }

  logedin() {
    return this.authsvc.isLogin$;
    
  }
  MemmberShipType: string[] = ['gold', 'regular', 'platinum'];

  showModifyMember() {
    const userId = prompt('Enter the user ID to modify:');
    if (userId) {
      this.obje.modifyUser(parseInt(userId, 10));
    } else {
      alert('Invalid user ID. Please enter a valid user ID.');
    }
  
  }

  showNewMembership() {
    
      const newMembershipType = prompt("Enter the new membership type:");
    
      if (newMembershipType) {
        
        this.MemmberShipType.push(newMembershipType);
    
        
        localStorage.setItem('MemmberShipType', JSON.stringify(this.MemmberShipType));
      } else {
        alert('Invalid input. Please enter a valid membership type.');
      }
    
    
  }

  showRemoveMembership() {
   
    const currentMembershipTypes = this.MemmberShipType.join(', ');
    const membershipToRemove = prompt(`Enter the membership type to remove (${currentMembershipTypes}):`);
  
    if (membershipToRemove) {
      
      const indexToRemove = this.MemmberShipType.indexOf(membershipToRemove);
  
      if (indexToRemove !== -1) {
      
        this.MemmberShipType.splice(indexToRemove, 1);
  
        
        localStorage.setItem('MemmberShipType', JSON.stringify(this.MemmberShipType));
  
        if (this.MemmberShipType.length > 0) {
          console.log('Updated Membership Types:', this.MemmberShipType);
        } else {
          console.log('No Membership Types available.');
        }
      } else {
        alert(`Membership type '${membershipToRemove}' not found.`);
      }
    } else {
      alert('Invalid input. Please enter a valid membership type.');
    }
  }
  

  ngOnInit(): void {
    
  
  } 




}
