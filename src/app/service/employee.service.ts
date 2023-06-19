import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(values:any):Observable<any>
  {
    console.log(values)
    return this._http.post<any>('http://localhost:3000/posts/',values);
  }
  updateEmployee(id:number,data:any):Observable<any>
  {
    console.log(data,id)
    return this._http.put<any>('http://localhost:3000/posts/'+id ,data);
  }
  getEmployee():Observable<any>
  {
    return this._http.get('http://localhost:3000/posts');
  }

  deleteEmployee(id:number):Observable<any>
  {
    return this._http.delete('http://localhost:3000/posts/'+id);
  }

}
