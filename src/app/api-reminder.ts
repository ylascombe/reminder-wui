import {EnvironmentDetail} from './environment-detail';
import {ApiInventory} from './api-inventory';

export class ApiReminder {
  id: number;
  project: number;
  name: string;
  reminder: EnvironmentDetail;
  inventory: ApiInventory;
}
