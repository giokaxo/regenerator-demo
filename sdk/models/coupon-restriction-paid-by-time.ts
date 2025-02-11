import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionPaidByTime implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'time')) {
      this.setTime(data['time']);
    }
  }


  public get type() {
    return 'paid-by-time';
  }

  public getType() {
    return 'paid-by-time';
  }

  get time(): Date {
    return this._fields['time'];
  }
  
  getTime(): Date {
      return this._fields['time'];
  }

  setTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['time'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'paid-by-time',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'time')) {
      data['time'] = this['time'].toISOString();
    }

    return data;
  }
}
