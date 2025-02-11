import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToProducts implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'productIds')) {
      this.setProductIds(data['productIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'minimumQuantity')) {
      this.setMinimumQuantity(data['minimumQuantity']);
    }
  }


  public get type() {
    return 'restrict-to-products';
  }

  public getType() {
    return 'restrict-to-products';
  }

  get productIds(): Array<any> {
    return this._fields['productIds'];
  }
  
  getProductIds(): Array<any> {
      return this._fields['productIds'];
  }

  setProductIds(value: Array<any>) {
    this._fields['productIds'] = value;

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
      type: 'restrict-to-products',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productIds')) {
      data['productIds'] = this['productIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'minimumQuantity')) {
      data['minimumQuantity'] = this['minimumQuantity'];
    }

    return data;
  }
}
