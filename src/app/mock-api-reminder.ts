import {ApiReminder} from './api-reminder';
import {ENVIRONMENTS_DETAILS} from './mock-environments-detail';

export const API_REMINDER: ApiReminder = {
  project: 1,
  id: 1,
  name: 'staging',
  reminder: ENVIRONMENTS_DETAILS[0],
  inventory: {
    id: 1
  }
};
