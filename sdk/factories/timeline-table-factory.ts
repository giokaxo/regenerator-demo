import ListTimelineTable from '../models/list-timeline-table';
import OneColumnTimelineTable from '../models/one-column-timeline-table';
import ThreeColumnsTimelineTable from '../models/three-columns-timeline-table';
import TwoColumnsTimelineTable from '../models/two-columns-timeline-table';
import TimelineTable from '../models/timeline-table';

export default class TimelineTableFactory {
  static from(data: any = {}): TimelineTable {
    switch(data.type) {
      case 'list': return new ListTimelineTable(data);
      case 'one-column': return new OneColumnTimelineTable(data);
      case 'three-columns': return new ThreeColumnsTimelineTable(data);
      case 'two-columns': return new TwoColumnsTimelineTable(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}
