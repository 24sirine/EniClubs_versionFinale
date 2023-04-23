import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  backendApi = environment.backendapi + 'absence/'

  constructor(private httpClient: HttpClient) { }
  postRequest(url: string, data: any): any {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
  const httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
       'Accept': 'application/json',
      }
    )
  };
  let payload = data;
//let endPoint ='http://localhost/DevWeb1/api' + url;
let endPoint ='http://localhost:3000/';

return this.httpClient.get(endPoint)
//return this.http.get(endPoint, httpOptions);
}

  readModule () {
    return this.httpClient.get(this.backendApi+ 'all')

}

  createModule (body) {
    return this.httpClient.post(this.backendApi + 'add', body)
  }

  deleteModule (body) {
    return this.httpClient.post(this.backendApi + 'delete/:id', body)
  }

  updateModule (body) {
    return this.httpClient.post(this.backendApi + 'update/:id', body)
  }
}
