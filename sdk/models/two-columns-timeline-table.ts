import TwoColumnsTimelineTableData from '../models/two-columns-timeline-table-data';
import TimelineTable from '../models/timeline-table';

export default class TwoColumnsTimelineTable extends TimelineTable {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      type: 'two-columns',
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
      (value) => value instanceof TwoColumnsTimelineTableData ? value : new TwoColumnsTimelineTableData(value),
    ) : null;

    this._fields['data'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'] !== null
          ? this._fields['data'].map((twoColumnsTimelineTableData: TwoColumnsTimelineTableData) => twoColumnsTimelineTableData.jsonSerialize())
          : null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}
