import {EnvironmentDetail} from './environment-detail';

export const ENVIRONMENTS_DETAILS: EnvironmentDetail[] = [
  {
    id: 1,
    name: 'INTEGRATION',
    stacks: [
      {
        id: 1,
        name: 'Kibana',
        logo: 'assets/kibana.svg',
        desc: 'Stack ELK pour exploiter les logs de la plateforme.',
        sections: [
          {
            id: 1,
            name: 'kibana',
            urls: [
              {
                name: 'http://es-elk-a-01:5601/'
              }
            ],
            hosts: []
          }
        ]
      },
      {
        id: 2,
        name: 'Elasticsearch',
        logo: 'assets/kibana.svg',
        desc: 'Stack ELK pour exploiter les logs de la plateforme.',
        sections: [
          {
            id: 2,
            name: 'es',
            urls: [
              {
                name: 'http://es-elk-a-01:9200/'
              }
            ],
            hosts: []
          }
        ]
      },
      {
        id: 3,
        name: 'Grafana',
        logo: 'assets/grafana.svg',
        desc: 'Outil de visualisation des metriques',
        sections: [
          {
            id: 3,
            name: 'grafana',
            urls: [
              {
                name: 'http://grafana-a-01:9200/'
              }
            ],
            hosts: []
          }
        ]
      },
      {
        id: 4,
        name: 'Prometheus',
        logo: 'assets/prometheus.png',
        desc: 'Stockage temporel des métriques',
        sections: [
          {
            id: 4,
            name: 'grafana',
            urls: [
              {
                name: 'http://prometheus-a-01:9200/'
              }
            ],
            hosts: []
          }
        ]
      },
      {
        id: 5,
        name: 'Kafka',
        logo: 'assets/kafka.png',
        desc: 'Stockage des evenements',
        sections: [
          {
            id: 4,
            name: 'kafka',
            urls: [],
            hosts: [
              {
                name: 'kafka-a-01'
              },
              {
                name: 'kafka-a-02'
              }
            ]
          }
        ]
      }
    ]
  },
];
