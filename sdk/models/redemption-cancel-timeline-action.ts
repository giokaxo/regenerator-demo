import { TimelineAction } from '../models/timeline-action';

export default class RedemptionCancelTimelineAction implements TimelineAction {
  get [TimelineAction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'redemptionId')) {
      this.setRedemptionId(data['redemptionId']);
    }
  }


  public get action() {
    return 'redemption-cancel';
  }

  public getAction() {
    return 'redemption-cancel';
  }

  get redemptionId(): string | null {
    return this._fields['redemptionId'] ?? null;
  }
  
  getRedemptionId(): string | null {
      return this._fields['redemptionId'] ?? null;
  }

  setRedemptionId(value: null | string) {
    this._fields['redemptionId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'redemption-cancel',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redemptionId')) {
      data['redemptionId'] = this['redemptionId'];
    }

    return data;
  }
}
