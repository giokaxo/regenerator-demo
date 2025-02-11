import { TimelineAction } from '../models/timeline-action';

export default class ShowEddSearchLogsTimelineAction implements TimelineAction {
  get [TimelineAction](): true {
    return true;
  }

  TYPE_ARREST = 'arrest';

  TYPE_BANKRUPTCY = 'bankruptcy';

  TYPE_FRAUD = 'fraud';

  TYPE_OCCUPATION = 'occupation';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'searchLogId')) {
      this.setSearchLogId(data['searchLogId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
  }


  public get action() {
    return 'show-edd-search-logs';
  }

  public getAction() {
    return 'show-edd-search-logs';
  }

  get searchLogId(): string | null {
    return this._fields['searchLogId'] ?? null;
  }
  
  getSearchLogId(): string | null {
      return this._fields['searchLogId'] ?? null;
  }

  setSearchLogId(value: null | string) {
    this._fields['searchLogId'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'show-edd-search-logs',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'searchLogId')) {
      data['searchLogId'] = this['searchLogId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }

    return data;
  }
}
