import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'
import { FormLanceEvent } from './FormLanceEvent/FormLanceEvent';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private http: HttpClient) { }

  // Add  - Create
  addFormLanceEvent(formLanceEvent: FormLanceEvent){
   
    return this.http.post<FormLanceEvent>(`${this.url}add-FormLanceEvent`, formLanceEvent)
   // return this.http.get(`http://localhost:8081/SpringMVC/servlet/add-FormLanceEvent`, {responseType: 'text'})
  }

  // Get  - Read
  retrieveAllLanceEvent(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'retrieve-all-FormLanceEvent')
    
  }
}
