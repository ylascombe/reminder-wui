import {Stack} from './stack';

// match 'reminder' item in api
export class EnvironmentDetail {
  id: number;
  name: string;
  stacks: Stack[];
}
