import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToCountries implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'countries')) {
      this.setCountries(data['countries']);
    }
  }


  public get type() {
    return 'restrict-to-countries';
  }

  public getType() {
    return 'restrict-to-countries';
  }

  get countries(): Array<any> {
    return this._fields['countries'];
  }
  
  getCountries(): Array<any> {
      return this._fields['countries'];
  }

  setCountries(value: Array<any>) {
    this._fields['countries'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-countries',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countries')) {
      data['countries'] = this['countries'];
    }

    return data;
  }
}
