import TimelineActionFactory from '../factories/timeline-action-factory';
import TimelineExtraDataAuthor from '../models/timeline-extra-data-author';
import { TimelineAction } from '../models/timeline-action';
import TimelineTable from '../models/timeline-table';
import TimelineExtraDataLinks from '../models/timeline-extra-data-links';

export default class TimelineExtraData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'actions')) {
      this.setActions(data['actions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tables')) {
      this.setTables(data['tables']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'author')) {
      this.setAuthor(data['author']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mentions')) {
      this.setMentions(data['mentions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'links')) {
      this.setLinks(data['links']);
    }
  }


  get actions(): Array<any> | null {
    return this._fields['actions'] ?? null;
  }
  
  getActions(): Array<any> | null {
      return this._fields['actions'] ?? null;
  }

  setActions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[TimelineAction] ? value : TimelineActionFactory.from(value),
    ) : null;

    this._fields['actions'] = value;

    return this;
  }

  get tables(): Array<any> | null {
    return this._fields['tables'] ?? null;
  }
  
  getTables(): Array<any> | null {
      return this._fields['tables'] ?? null;
  }

  setTables(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof TimelineTable ? value : new TimelineTable(value),
    ) : null;

    this._fields['tables'] = value;

    return this;
  }

  get author(): TimelineExtraDataAuthor | null {
    return this._fields['author'] ?? null;
  }
  
  getAuthor(): TimelineExtraDataAuthor | null {
      return this._fields['author'] ?? null;
  }

  setAuthor(value: null | TimelineExtraDataAuthor | any) {
    if (value !== null && !(value instanceof TimelineExtraDataAuthor)) {
      value = new TimelineExtraDataAuthor(value);
    }

    this._fields['author'] = value;

    return this;
  }

  get mentions(): Record<string, any> | null {
    return this._fields['mentions'] ?? null;
  }
  
  getMentions(): Record<string, any> | null {
      return this._fields['mentions'] ?? null;
  }

  setMentions(value: null | Record<string, any>) {
    this._fields['mentions'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['links'] ?? null;
  }

  setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof TimelineExtraDataLinks ? value : new TimelineExtraDataLinks(value),
    ) : null;

    this._fields['links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'actions')) {
      data['actions'] = this['actions'] !== null
          ? this._fields['actions'].map((timelineAction: TimelineAction) => timelineAction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tables')) {
      data['tables'] = this['tables'] !== null
          ? this._fields['tables'].map((timelineTable: TimelineTable) => timelineTable.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'author')) {
      data['author'] = this['author']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mentions')) {
      data['mentions'] = this['mentions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['links'] = this['links'] !== null
          ? this._fields['links'].map((timelineExtraDataLinks: TimelineExtraDataLinks) => timelineExtraDataLinks.jsonSerialize())
          : null;
    }

    return data;
  }
}
