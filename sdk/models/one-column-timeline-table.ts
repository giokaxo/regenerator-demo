import OneColumnTimelineTableData from '../models/one-column-timeline-table-data';
import TimelineTable from '../models/timeline-table';

export default class OneColumnTimelineTable extends TimelineTable {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      type: 'one-column',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
  }


  get data(): Array<any> | null {
    return this._fields['data'] ?? null;
  }
  
  getData(): Array<any> | null {
      return this._fields['data'] ?? null;
  }

  setData(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OneColumnTimelineTableData ? value : new OneColumnTimelineTableData(value),
    ) : null;

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'] !== null
          ? this._fields['data'].map((oneColumnTimelineTableData: OneColumnTimelineTableData) => oneColumnTimelineTableData.jsonSerialize())
          : null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
