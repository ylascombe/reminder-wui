import { Injectable } from '@angular/core';
import { Environment } from './environment';
// import { ENVIRONMENTS } from './mock-environments';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EnvironmentService {

  selectedEnvironment: Environment;

  constructor(
    private http: HttpClient
  ) { }

  getEnvironments(): Observable<Environment[]> {
    // return of(ENVIRONMENTS);
    const url = 'http://127.0.0.1:8000/environments/';
    return this.http.get<Environment[]>(url);
  }

  getEnvironment(name: string): Observable<Environment> {
    // return of(ENVIRONMENTS[0]);
    const url = 'http://127.0.0.1:8000/environments/';
    return this.http.get<Environment>(url);
  }

  setSelectedEnvironment(newSelected: Environment) {
    this.selectedEnvironment = newSelected;
  }
}
