import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionDiscountPerRedemption implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

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
    return 'discounts-per-redemption';
  }

  public getType() {
    return 'discounts-per-redemption';
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
      type: 'discounts-per-redemption',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }

    return data;
  }
}
