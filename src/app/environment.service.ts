import { Injectable } from '@angular/core';
import { Environment } from './environment';
import { ENVIRONMENTS } from './mock-environments';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EnvironmentService {

  selectedEnvironment: Environment;

  constructor() { }

  getEnvironments(): Observable<Environment[]> {
    return of(ENVIRONMENTS);
  }
}
