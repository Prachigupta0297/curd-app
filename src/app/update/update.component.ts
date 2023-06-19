import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../service/update.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editForm: FormGroup | any;
  getId: any;
  editdata: any;
  empForm: any;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(private service: UpdateService, private dialogRef: MatDialogRef<UpdateComponent>, private param: ActivatedRoute) {

    this.editForm = new FormGroup({

      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      education: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      experience: new FormControl("", [Validators.required]),

      package: new FormControl("", [Validators.required])

    });
  }

  ngOnInit(): void {

    // this.empForm.patchValue(this.editdata);


    this.update()


  }

  onFormSubmit(data: any) {

    if (this.editForm.valid) {

      this.service.updateData(this.service.id, data).subscribe((val: any) => {
        alert('Employee added sucessfully');
        // this.dialogRef.close();
      });
    }
  }

  update() {
    this.editdata = this.service.getData(this.service.id).subscribe((result) => {
      this.editForm.controls['firstName'].patchValue(result.firstName)
      this.editForm.controls['lastName'].patchValue(result.lastName)
      this.editForm.controls['email'].patchValue(result.email)
      this.editForm.controls['dob'].patchValue(result.dob)
      this.editForm.controls['gender'].patchValue(result.gender)
      this.editForm.controls['education'].patchValue(result.education)
      this.editForm.controls['company'].patchValue(result.education)
      this.editForm.controls['experience'].patchValue(result.experience)
      this.editForm.controls['package'].patchValue(result.package)

      console.log(result)
    })
  }


}

