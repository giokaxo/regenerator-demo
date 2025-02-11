import ListTimelineTable from '../models/list-timeline-table';
import OneColumnTimelineTable from '../models/one-column-timeline-table';
import ThreeColumnsTimelineTable from '../models/three-columns-timeline-table';
import TwoColumnsTimelineTable from '../models/two-columns-timeline-table';

export default class TimelineTable {
  TYPE_LIST = 'list';

  TYPE_ONE_COLUMNS = 'one-columns';

  TYPE_TWO_COLUMNS = 'two-columns';

  TYPE_THREE_COLUMNS = 'three-columns';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'title')) {
      this.setTitle(data['title']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'footer')) {
      this.setFooter(data['footer']);
    }
  }


  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get title(): string | null {
    return this._fields['title'] ?? null;
  }
  
  getTitle(): string | null {
      return this._fields['title'] ?? null;
  }

  setTitle(value: null | string) {
    this._fields['title'] = value;

    return this;
  }

  get footer(): string | null {
    return this._fields['footer'] ?? null;
  }
  
  getFooter(): string | null {
      return this._fields['footer'] ?? null;
  }

  setFooter(value: null | string) {
    this._fields['footer'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'title')) {
      data['title'] = this['title'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'footer')) {
      data['footer'] = this['footer'];
    }

    return data;
  }
}
