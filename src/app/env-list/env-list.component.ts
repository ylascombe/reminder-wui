import { Component, OnInit } from '@angular/core';
import { Environment } from '../environment';
import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-env-list',
  templateUrl: './env-list.component.html',
  styleUrls: ['./env-list.component.css']
})
export class EnvListComponent implements OnInit {

  selectedEnv: Environment;

  environments: Environment[];

  constructor(private environmentService: EnvironmentService) { }

  ngOnInit() {
    this.getEnvironments();
  }

  onSelect(env: Environment): void {
    this.selectedEnv = env;
    this.environmentService.selectedEnvironment = env;
  }

  getEnvironments(): void {
    this.environmentService.getEnvironments()
      .subscribe(environments => this.environments = environments);
  }

}
