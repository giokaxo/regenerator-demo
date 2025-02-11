import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToCustomers implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customerIds')) {
      this.setCustomerIds(data['customerIds']);
    }
  }


  public get type() {
    return 'restrict-to-customers';
  }

  public getType() {
    return 'restrict-to-customers';
  }

  get customerIds(): Array<any> {
    return this._fields['customerIds'];
  }
  
  getCustomerIds(): Array<any> {
      return this._fields['customerIds'];
  }

  setCustomerIds(value: Array<any>) {
    this._fields['customerIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-customers',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerIds')) {
      data['customerIds'] = this['customerIds'];
    }

    return data;
  }
}
