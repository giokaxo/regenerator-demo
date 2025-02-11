import RedemptionRestrictionFactory from '../factories/redemption-restriction-factory';
import { RedemptionRestriction } from '../models/redemption-restriction';
import ResourceLink from '../models/resource-link';

export default class CouponRedemption {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponId')) {
      this.setCouponId(data['couponId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'additionalRestrictions')) {
      this.setAdditionalRestrictions(data['additionalRestrictions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledTime')) {
      this.setCanceledTime(data['canceledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get couponId(): string | null {
    return this._fields['couponId'] ?? null;
  }
  
  getCouponId(): string | null {
      return this._fields['couponId'] ?? null;
  }

  setCouponId(value: null | string) {
    this._fields['couponId'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get additionalRestrictions(): Array<any> | null {
    return this._fields['additionalRestrictions'] ?? null;
  }
  
  getAdditionalRestrictions(): Array<any> | null {
      return this._fields['additionalRestrictions'] ?? null;
  }

  setAdditionalRestrictions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[RedemptionRestriction] ? value : RedemptionRestrictionFactory.from(value),
    ) : null;

    this._fields['additionalRestrictions'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get canceledTime(): Date | null {
    return this._fields['canceledTime'] ?? null;
  }
  
  getCanceledTime(): Date | null {
      return this._fields['canceledTime'] ?? null;
  }

  private setCanceledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['canceledTime'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponId')) {
      data['couponId'] = this['couponId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'additionalRestrictions')) {
      data['additionalRestrictions'] = this['additionalRestrictions'] !== null
          ? this._fields['additionalRestrictions'].map((redemptionRestriction: RedemptionRestriction) => redemptionRestriction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledTime')) {
      data['canceledTime'] = this['canceledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
