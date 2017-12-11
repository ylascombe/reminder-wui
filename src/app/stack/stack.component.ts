import { Component, OnInit, Input } from '@angular/core';
import {Stack} from '../stack';
import {StackSection} from '../stack-section';
import {StackSectionName} from '../stack-section-names';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  @Input() stack: Stack;

  constructor() { }

  ngOnInit() {

    for (const section of this.stack.sections) {
      console.log(section);

      for (const url of section.urls) {
        console.log(url);
      }
    }
  }

}
