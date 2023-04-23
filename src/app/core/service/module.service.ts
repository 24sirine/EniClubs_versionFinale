import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  backendApi = environment.backendapi + 'module/'
  
  constructor(
  private httpClient: HttpClient
  ) { }

  readModule () {
    return this.httpClient.get(this.backendApi)
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