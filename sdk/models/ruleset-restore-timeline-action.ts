import { TimelineAction } from '../models/timeline-action';

export default class RulesetRestoreTimelineAction implements TimelineAction {
  get [TimelineAction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'version')) {
      this.setVersion(data['version']);
    }
  }


  public get action() {
    return 'ruleset-restore';
  }

  public getAction() {
    return 'ruleset-restore';
  }

  get version(): number | null {
    return this._fields['version'] ?? null;
  }
  
  getVersion(): number | null {
      return this._fields['version'] ?? null;
  }

  setVersion(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['version'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'ruleset-restore',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'version')) {
      data['version'] = this['version'];
    }

    return data;
  }
}
