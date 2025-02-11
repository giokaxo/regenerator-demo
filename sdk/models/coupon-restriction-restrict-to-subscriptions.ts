import { RedemptionRestriction } from '../models/redemption-restriction';
import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToSubscriptions implements RedemptionRestriction, CouponRestriction {
  get [RedemptionRestriction](): true {
    return true;
  }

  get [CouponRestriction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionIds')) {
      this.setSubscriptionIds(data['subscriptionIds']);
    }
  }


  public get type() {
    return 'restrict-to-subscriptions';
  }

  public getType() {
    return 'restrict-to-subscriptions';
  }

  get subscriptionIds(): Array<any> {
    return this._fields['subscriptionIds'];
  }
  
  getSubscriptionIds(): Array<any> {
      return this._fields['subscriptionIds'];
  }

  setSubscriptionIds(value: Array<any>) {
    this._fields['subscriptionIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-subscriptions',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionIds')) {
      data['subscriptionIds'] = this['subscriptionIds'];
    }

    return data;
  }
}
