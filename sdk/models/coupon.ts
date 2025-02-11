import DiscountFactory from '../factories/discount-factory';
import CouponRestrictionFactory from '../factories/coupon-restriction-factory';
import { Discount } from '../models/discount';
import { CouponRestriction } from '../models/coupon-restriction';
import ResourceLink from '../models/resource-link';

export default class Coupon {
  STATUS_DRAFT = 'draft';

  STATUS_ISSUED = 'issued';

  STATUS_EXPIRED = 'expired';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discount')) {
      this.setDiscount(data['discount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'restrictions')) {
      this.setRestrictions(data['restrictions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redemptionsCount')) {
      this.setRedemptionsCount(data['redemptionsCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuedTime')) {
      this.setIssuedTime(data['issuedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expiredTime')) {
      this.setExpiredTime(data['expiredTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
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

  get discount(): Discount {
    return this._fields['discount'];
  }
  
  getDiscount(): Discount {
      return this._fields['discount'];
  }

  setDiscount(value: Discount | any) {
    if (!(value[Discount])) {
      value = DiscountFactory.from(value);
    }

    this._fields['discount'] = value;

    return this;
  }

  get restrictions(): Array<any> | null {
    return this._fields['restrictions'] ?? null;
  }
  
  getRestrictions(): Array<any> | null {
      return this._fields['restrictions'] ?? null;
  }

  setRestrictions(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[CouponRestriction] ? value : CouponRestrictionFactory.from(value),
    ) : null;

    this._fields['restrictions'] = value;

    return this;
  }

  get redemptionsCount(): number | null {
    return this._fields['redemptionsCount'] ?? null;
  }
  
  getRedemptionsCount(): number | null {
      return this._fields['redemptionsCount'] ?? null;
  }

  private setRedemptionsCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['redemptionsCount'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get issuedTime(): Date {
    return this._fields['issuedTime'];
  }
  
  getIssuedTime(): Date {
      return this._fields['issuedTime'];
  }

  setIssuedTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['issuedTime'] = value;

    return this;
  }

  get expiredTime(): Date | null {
    return this._fields['expiredTime'] ?? null;
  }
  
  getExpiredTime(): Date | null {
      return this._fields['expiredTime'] ?? null;
  }

  setExpiredTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expiredTime'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discount')) {
      data['discount'] = this['discount'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'restrictions')) {
      data['restrictions'] = this['restrictions'] !== null
          ? this._fields['restrictions'].map((couponRestriction: CouponRestriction) => couponRestriction.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redemptionsCount')) {
      data['redemptionsCount'] = this['redemptionsCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedTime')) {
      data['issuedTime'] = this['issuedTime'].toISOString();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expiredTime')) {
      data['expiredTime'] = this['expiredTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
