import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // id:any;

  constructor(private _http:HttpClient) { }

 
  data(values:any):Observable<any>{
    console.log(values);
    return this._http.get('http://localhost:3000/signup?email='+values.Email+'&&password='+values.password)
  }
}
