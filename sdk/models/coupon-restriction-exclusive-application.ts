import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionExclusiveApplication implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get type() {
    return 'restrict-to-exclusive-application';
  }

  public getType() {
    return 'restrict-to-exclusive-application';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-exclusive-application',
    };

    return data;
  }
}
