import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {EnvironmentDetail} from './environment-detail';
import {ENVIRONMENTS_DETAILS} from './mock-environments-detail';

@Injectable()
export class EnvironmentDetailService {

  constructor() { }

  getEnvironmentDetail(name: string): Observable<EnvironmentDetail> {
    return of(ENVIRONMENTS_DETAILS[0]);
  }
}

