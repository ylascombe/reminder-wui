import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Environment } from '../environment';
import { EnvironmentService } from '../environment.service';
import {EnvironmentDetailService} from '../environment-detail.service';
import {EnvironmentDetail} from '../environment-detail';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})

export class EnvironmentDetailComponent implements OnInit {

  @Input() environment: Environment;
  environmentDetail: EnvironmentDetail;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public environmentService: EnvironmentService,
    public environmentDetailService: EnvironmentDetailService
  ) { }

  ngOnInit() {
    this.environment = this.environmentService.selectedEnvironment;
    this.getEnvironmentDetail();
  }

  getEnvironmentDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    // console.log(this.environmentService.selectedEnvironment);

    this.environmentDetailService.getEnvironmentDetail(id)
      .subscribe(apiResult => this.environmentDetail = apiResult.reminder);
  }
}
