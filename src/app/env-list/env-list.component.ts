import { Component, OnInit } from '@angular/core';
import { Environment } from '../environment';
import { ENVIRONMENTS } from '../mock-environments';

@Component({
  selector: 'app-env-list',
  templateUrl: './env-list.component.html',
  styleUrls: ['./env-list.component.css']
})
export class EnvListComponent implements OnInit {

  environments = ENVIRONMENTS;

  constructor() { }

  ngOnInit() {
  }

  selectedEnv: Environment;

  onSelect(env: Environment): void {
    this.selectedEnv = env;
  }

}
