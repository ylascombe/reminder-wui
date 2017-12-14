import {StackUrl} from './stack-url';
import {StackHostname} from './stack-hostname';

export class Stack {
  id: number;
  name: string;
  logo: string;
  desc: string;
  urls: StackUrl[];
  hostnames: StackHostname[];
}
