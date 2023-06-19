import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  constructor(private router: Router, private service:LoginService){}
  login:FormGroup|any;
  data={};

  ngOnInit(): void {

    this.login = new FormGroup({
      'Email':new FormControl("",[Validators.required]),
      'password':new FormControl("",[Validators.required])
    })
    
    
  }

  // onSubmit()
  // {
  //   this.router.navigate(['/home']);
  // }

   
  logindata(values:any)
  {
    this.service.data(this.login.value).subscribe((res:any)=>{
      if(res.length==1){
        alert('you are sucessfully login');
        this.router.navigateByUrl('/home');
        // this.toast.success({detail:"Success Message",summary:"Login is Successfully",duration:10000})
      }
       else
       {
        alert('data not found , pls first registration');
        // this.toast.error({detail:"Error Message",summary:" data not found",duration:10000})
       }
       })
    }
  
   }  



