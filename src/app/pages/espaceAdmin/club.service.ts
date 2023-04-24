import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http:HttpClient) { }
  getClubs(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8081/SpringMVC/servlet/retrieve-all-clubs');
  }
 
  removeClub(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8081/SpringMVC/servlet/remove-club/${id}`)
  }
}