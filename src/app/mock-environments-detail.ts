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
          urls: [
            {
              url: 'http://es-elk-a-01:5601/'
            }
          ],
          hostnames: []
        },
        {
          id: 2,
          name: 'Elasticsearch',
          logo: 'assets/elasticsearch.svg',
          desc: 'Stack ELK pour exploiter les logs de la plateforme.',
          urls: [
            {
              url: 'http://es-elk-a-01:9200/'
            }
          ],
          hostnames: []
        },
        {
          id: 3,
          name: 'Grafana',
          logo: 'assets/grafana.svg',
          desc: 'Outil de visualisation des metriques',
          urls: [
            {
              url: 'http://grafana-a-01:9200/'
            }
          ],
          hostnames: []
        },
        {
          id: 4,
          name: 'Prometheus',
          logo: 'assets/prometheus.png',
          desc: 'Stockage temporel des métriques',
          urls: [
            {
              url: 'http://prometheus-a-01:9200/'
            }
          ],
          hostnames: []
        },
        {
          id: 5,
          name: 'Kafka',
          logo: 'assets/kafka.png',
          desc: 'Stockage des evenements',
          urls: [],
          hostnames: [
            {
              hostname: 'kafka-a-01'
            },
            {
              hostname: 'kafka-a-02'
            }
          ]
        }
      ]
    }
  ]
;
