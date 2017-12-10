import {EnvironmentDetail} from './environment-detail';

export const ENVIRONMENTS_DETAILS: EnvironmentDetail[] = [
  {
    id: 1,
    name: 'INTEGRATION',
    urls: [
      { title: 'Kibana',
        url : 'http://es-elk-a-01:5601/',
        image_url: 'assets/kibana.svg',
        desc: 'Stack ELK pour exploiter les logs de la plateforme.'
      }
    ]
  },
];
