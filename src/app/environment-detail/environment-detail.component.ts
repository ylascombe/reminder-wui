import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Environment } from '../environment';
import { EnvironmentService } from '../environment.service';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})

export class EnvironmentDetailComponent implements OnInit {

  @Input() environment: Environment;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public environmentService: EnvironmentService
  ) { }

  ngOnInit() {
    this.environment = this.environmentService.selectedEnvironment;
    // this.getEnvironment();
  }

  getEnvironment() {
    const name = this.route.snapshot.paramMap.get('name');

    this.environmentService.getEnvironment(name)
      // .subscribe(environment => this.environment = environment); // TODO uncomment this line
      .subscribe(environment => this.environment = {'id': 1, 'name': name});
  }
}
