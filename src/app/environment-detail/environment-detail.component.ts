import { Component, OnInit, Input } from '@angular/core';
import { Environment } from '../environment';
import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})

export class EnvironmentDetailComponent implements OnInit {

  @Input() environment: Environment;

  constructor(private environmentService: EnvironmentService) { }

  ngOnInit() {
    this.environment = this.environmentService.selectedEnvironment;
  }

}
