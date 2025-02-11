import { CouponRestriction } from '../models/coupon-restriction';
import CouponRestrictionRestrictToBxgyBuy from '../models/coupon-restriction-restrict-to-bxgy-buy';
import CouponRestrictionRestrictToBxgyGet from '../models/coupon-restriction-restrict-to-bxgy-get';

export default class CouponRestrictionRestrictToBxgy implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'buy')) {
      this.setBuy(data['buy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'get')) {
      this.setGet(data['get']);
    }
  }


  public get type() {
    return 'restrict-to-bxgy';
  }

  public getType() {
    return 'restrict-to-bxgy';
  }

  get buy(): Array<any> {
    return this._fields['buy'];
  }
  
  getBuy(): Array<any> {
      return this._fields['buy'];
  }

  setBuy(value: Array<any>) {
    value = value.map(
      (value) => value instanceof CouponRestrictionRestrictToBxgyBuy ? value : new CouponRestrictionRestrictToBxgyBuy(value),
    );

    this._fields['buy'] = value;

    return this;
  }

  get get(): Array<any> {
    return this._fields['get'];
  }
  
  getGet(): Array<any> {
      return this._fields['get'];
  }

  setGet(value: Array<any>) {
    value = value.map(
      (value) => value instanceof CouponRestrictionRestrictToBxgyGet ? value : new CouponRestrictionRestrictToBxgyGet(value),
    );

    this._fields['get'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-bxgy',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'buy')) {
      data['buy'] = this['buy'].map(
          (couponRestrictionRestrictToBxgyBuy: CouponRestrictionRestrictToBxgyBuy) => couponRestrictionRestrictToBxgyBuy.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'get')) {
      data['get'] = this['get'].map(
          (couponRestrictionRestrictToBxgyGet: CouponRestrictionRestrictToBxgyGet) => couponRestrictionRestrictToBxgyGet.jsonSerialize()
      );
    }

    return data;
  }
}
