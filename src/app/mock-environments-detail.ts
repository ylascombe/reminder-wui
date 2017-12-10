import {EnvironmentDetail} from './environment-detail';

export const ENVIRONMENTS_DETAILS: EnvironmentDetail[] = [
  {
    id: 1,
    name: 'INTEGRATION',
    urls: [
      {
        title: 'Kibana',
        url: 'http://es-elk-a-01:5601/',
        image_url: 'assets/kibana.svg',
        desc: 'Stack ELK pour exploiter les logs de la plateforme.'
      },
      {
        title: 'Elasticsearch',
        url: 'http://es-elk-a-01:9200/',
        image_url: 'assets/elasticsearch.svg',
        desc: 'Stack ELK pour exploiter les logs de la plateforme.'
      },
      {
        title: 'Grafana',
        url: 'http://grafana-a-01:9200/',
        image_url: 'assets/grafana.svg',
        desc: 'Outil de visualisation des metriques'
      },
      {
        title: 'Prometheus',
        url: 'http://prometheus-a-01:9200/',
        image_url: 'assets/prometheus.png',
        desc: 'Stockage temporel des métriques'
      }
    ]
  },
];
