import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
// import { EmployeeService } from './service/employee.service';
import { EmployeeService } from '../service/employee.service';
import { filter } from 'rxjs';
import { FormGroup } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
// import { UpdateComponent } from './update/update.component';
import { UpdateComponent } from '../update/update.component';
// import { UpdateService } from './service/update.service';
import { UpdateService } from '../service/update.service';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  title = 'curd-app';
  empdata:FormGroup|any;
  getId:any;
  data:any;

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName',
     'email',
     'dob',
     'gender',
     'education',
     'company',
     'experience',
     'package',
     'action',
     'double'

];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog , private service:EmployeeService ,private router:Router, private param:ActivatedRoute, private updateService:UpdateService){}

  ngOnInit(): void {
    this.getEmployee();
     this.getId = this.param.snapshot.paramMap.get('id');
  
  }

  openAddEditEmpForm(){
    this._dialog.open(EmpAddEditComponent)
   }
   EditEmpForm(data:any){
    this.updateService.id = data.id
     
     this._dialog.open(UpdateComponent)
   }
    
   getEmployee()
   {
    this.service.getEmployee().subscribe(val=>{
     this.dataSource = new MatTableDataSource(val);
     this.dataSource.sort=this.sort;
     this.dataSource.paginator= this.paginator;
     });
   }
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
   deleteEmployee(id:number){
     this.service.deleteEmployee(id).subscribe((val)=>
       {
         alert('Employee Deleted!');
         this.getEmployee();
       });
   }
 
   openEditEmpForm(row:any)
   {
     // this.router.navigateByUrl('update');
     this._dialog.open(EmpAddEditComponent,{
         width:'100%',
         data:row
 
     })
     // if(this.getId)
     // this.data= this.service.getEmployee().subscribe((val)=>
     // {
     //     this.data.controls['firstName'].setvalue(val.firstName)
     //     this.data.controls['lastName'].setvalue(val.lastName)
     //     this.data.controls['email'].setvalue(val.email)
     //     this.data.controls['dob'].setvalue(val.dob)
     //     this.data.controls['education'].setvalue(val.education)
     //     this.data.controls['company'].setvalue(val.company)
     //     this.data.controls['experience'].setvalue(val.experience)
     //     this.data.controls['package'].setvalue(val.package)
     // })
   }
 
 }
 


