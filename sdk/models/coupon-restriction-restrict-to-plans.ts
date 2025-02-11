import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToPlans implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'planIds')) {
      this.setPlanIds(data['planIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'minimumQuantity')) {
      this.setMinimumQuantity(data['minimumQuantity']);
    }
  }


  public get type() {
    return 'restrict-to-plans';
  }

  public getType() {
    return 'restrict-to-plans';
  }

  get planIds(): Array<any> {
    return this._fields['planIds'];
  }
  
  getPlanIds(): Array<any> {
      return this._fields['planIds'];
  }

  setPlanIds(value: Array<any>) {
    this._fields['planIds'] = value;

    return this;
  }

  get minimumQuantity(): number | null {
    return this._fields['minimumQuantity'] ?? null;
  }
  
  getMinimumQuantity(): number | null {
      return this._fields['minimumQuantity'] ?? null;
  }

  setMinimumQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['minimumQuantity'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-plans',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planIds')) {
      data['planIds'] = this['planIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minimumQuantity')) {
      data['minimumQuantity'] = this['minimumQuantity'];
    }

    return data;
  }
}
