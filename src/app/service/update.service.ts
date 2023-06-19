import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  id:any;

  constructor(private http:HttpClient) { }

  getData(id:number):Observable<any>
  {
    return this.http.get('http://localhost:3000/posts/'+id);
  }

   updateData(id:number , values:any):Observable<any>  
  {   
    return this.http.put<any>('http://localhost:3000/posts/'+id, values);
   } 
} 
