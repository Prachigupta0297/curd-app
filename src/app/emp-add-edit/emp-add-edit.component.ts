import { Component , Inject, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit{
  empForm:FormGroup|any;
  getId:any;
  addEdit:boolean=false;

  education: string[] =[
      'Matric',
      'Diploma',
      'Intermediate',
      'Graduate',
      'Post Graduate',
];
constructor( private service:EmployeeService, private dialogRef:MatDialogRef<EmpAddEditComponent>, 
  @Inject(MAT_DIALOG_DATA) public data:any,
  private router:Router ,
  private param:ActivatedRoute
  )
{
  this.empForm = new FormGroup({
    
    firstName: new FormControl("",[Validators.required]),
     lastName: new FormControl("",[Validators.required]),
     email:   new FormControl("",[Validators.required]),
      dob:       new FormControl("",[Validators.required]),
      gender:     new FormControl("",[Validators.required]),
     education: new FormControl("",[Validators.required]),
    company:    new FormControl("",[Validators.required]),
   experience: new FormControl("",[Validators.required]),

    package: new FormControl("",[Validators.required])

  });
}
 ngOnInit(): void {
  //  this.empForm.patchValue(this.data);

   this.getId = this.param.snapshot.paramMap.get('id');
 }

onFormSubmit(values:any)
{
    if(this.empForm.valid)
      {
       this.service.addEmployee(this.empForm.value).subscribe((val:any) =>{
          alert('Employee added sucessfully');
          // this.dialogRef.close();
        });
      }
      else
      {
        alert("pls fill form");
      }
    }
   
    
    }
// back()
//     {
//       // this.router.navigateByUrl('/');
//     }
  
  

