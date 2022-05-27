import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private apiRoot = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getMain() {
    return this.http.get(this.apiRoot.concat('getData'));
  }
}