import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiReminder} from './api-reminder';
import {API_REMINDER} from './mock-api-reminder';

@Injectable()
export class EnvironmentDetailService {

  constructor(
    private http: HttpClient
  ) { }

  getEnvironmentDetail(name: string): Observable<ApiReminder> {
    // return of(API_REMINDER);
    const url = 'http://127.0.0.1:8000/environments/1/';
    return this.http.get<ApiReminder>(url);

    // return this.http.get<EnvironmentDetail>(url).pipe(
    //   tap(environment => this.log(`fetched environment`)),
    //   catchError(this.handleError<EnvironmentDetail>(`getenvironment`))
    // );
  }
}

