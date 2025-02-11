import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionTotalRedemptions implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
  }


  public get type() {
    return 'total-redemptions';
  }

  public getType() {
    return 'total-redemptions';
  }

  get quantity(): number {
    return this._fields['quantity'];
  }
  
  getQuantity(): number {
      return this._fields['quantity'];
  }

  setQuantity(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'total-redemptions',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }

    return data;
  }
}
