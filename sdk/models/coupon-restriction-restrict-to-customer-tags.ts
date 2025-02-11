import { CouponRestriction } from '../models/coupon-restriction';

export default class CouponRestrictionRestrictToCustomerTags implements CouponRestriction {
  get [CouponRestriction](): true {
    return true;
  }

  REQUIRE_ALL_TAGS_TRUE = 'true';

  REQUIRE_ALL_TAGS_FALSE = 'false';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requireAllTags')) {
      this.setRequireAllTags(data['requireAllTags']);
    }
  }


  public get type() {
    return 'restrict-to-customer-tags';
  }

  public getType() {
    return 'restrict-to-customer-tags';
  }

  get tags(): Array<any> {
    return this._fields['tags'];
  }
  
  getTags(): Array<any> {
      return this._fields['tags'];
  }

  setTags(value: Array<any>) {
    this._fields['tags'] = value;

    return this;
  }

  get requireAllTags(): boolean {
    return this._fields['requireAllTags'];
  }
  
  getRequireAllTags(): boolean {
      return this._fields['requireAllTags'];
  }

  setRequireAllTags(value: boolean) {
    this._fields['requireAllTags'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'restrict-to-customer-tags',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requireAllTags')) {
      data['requireAllTags'] = this['requireAllTags'];
    }

    return data;
  }
}
