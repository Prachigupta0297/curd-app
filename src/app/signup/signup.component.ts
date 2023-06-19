import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signup:FormGroup|any;

  constructor(private service:SignupService, private router:Router){
    alert()
  }

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname':new FormControl("",[Validators.required]),
      'lname':new FormControl("",[Validators.required]),
      'Email':new FormControl("",[Validators.required]),
      'password':new FormControl("",[Validators.required]),
      'mobile':new FormControl("",[Validators.required])
    })
    
  }
  signupdata(values:any)
  {
    if(this.signup.valid)
    {
       this.service.postData(values).subscribe(values);
       alert("Form is Submit");
       this.router.navigateByUrl('/')
    }
    else
    {
      alert("pls fill data");
    }


}
}