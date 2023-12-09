import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgeValidation } from 'Age.Validator';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-new-member-registration',
  templateUrl: './new-member-registration.component.html',
  styleUrls: ['./new-member-registration.component.css']
})
export class NewMemberRegistrationComponent implements OnInit {

  registrationForm=new FormGroup({
    FullName: new FormControl('', [Validators.required,  Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    EmailId: new FormControl('', [Validators.required,  Validators.email]),
    MobileNo:new FormControl("",[Validators.required,  Validators.pattern('[0-9]*'),Validators.minLength(10)]),
    // dob:new FormControl("",[Validators.required]),
    dob: new FormControl('',[Validators.required,AgeValidation.ageRangeValidator]),//classname.validationfunctionname
    ExperienceStatus  : new FormControl('', Validators.required),
      //Custom Validator Control
  
  
  });

  constructor(private fb: FormBuilder,private obj : RegisterService ) { }

  ngOnInit(): void {

  }

  isAdultValidator(control: { value: string | number | Date; }) {
    const birthDate = new Date(control.value);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age >= 18 ? null : { isAdult: true };
  }

  onSubmit() {
    // Handle form submission logic here
    console.log("submitted");
    // console.log(this.registrationForm.value);
  }

  JobSeekerObj :any={
    "JobSeekerId": Math.random,
    "FullName": "",
    "EmailId": "",
    "MobileNo": "",
    "ExperienceStatus": "",
    "ResumeUrl": "xyz.com",
  };


  registerASJobSeeker(){
    this.obj.registerEmployee(this.JobSeekerObj).subscribe((res:any)=>{
      if (res.result){
        alert(res.message)
      }
      else{
        alert(res.message)
      }
    })
  }
}
