import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionMinimumOrderAmount implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
  }


  public get type() {
    return 'minimum-order-amount';
  }

  public getType() {
    return 'minimum-order-amount';
  }

  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'minimum-order-amount',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }

    return data;
  }
}
