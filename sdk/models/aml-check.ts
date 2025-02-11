import AmlCheckCustomer from '../models/aml-check-customer';
import AML from '../models/aml';
import Tag from '../models/tag';
import ResourceLink from '../models/resource-link';

export default class AmlCheck {
  SOURCE_SIGN_UP = 'sign-up';

  SOURCE_RECURRING = 'recurring';

  SOURCE_PURCHASE = 'purchase';

  STATUS_PENDING_REVIEW = 'pending-review';

  STATUS_IN_REVIEW = 'in-review';

  STATUS_NO_MATCH = 'no-match';

  STATUS_CONFIRMED_MATCH = 'confirmed-match';

  STATUS_FALSE_POSITIVE = 'false-positive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewerId')) {
      this.setReviewerId(data['reviewerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewerName')) {
      this.setReviewerName(data['reviewerName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewStartTime')) {
      this.setReviewStartTime(data['reviewStartTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewTime')) {
      this.setReviewTime(data['reviewTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'priority')) {
      this.setPriority(data['priority']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'source')) {
      this.setSource(data['source']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hits')) {
      this.setHits(data['hits']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
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

  setId(value: null | string) {
    this._fields['id'] = value;

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

  get websiteId(): string | null {
    return this._fields['websiteId'] ?? null;
  }
  
  getWebsiteId(): string | null {
      return this._fields['websiteId'] ?? null;
  }

  setWebsiteId(value: null | string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get reviewerId(): string | null {
    return this._fields['reviewerId'] ?? null;
  }
  
  getReviewerId(): string | null {
      return this._fields['reviewerId'] ?? null;
  }

  setReviewerId(value: null | string) {
    this._fields['reviewerId'] = value;

    return this;
  }

  get reviewerName(): string | null {
    return this._fields['reviewerName'] ?? null;
  }
  
  getReviewerName(): string | null {
      return this._fields['reviewerName'] ?? null;
  }

  setReviewerName(value: null | string) {
    this._fields['reviewerName'] = value;

    return this;
  }

  get reviewStartTime(): Date | null {
    return this._fields['reviewStartTime'] ?? null;
  }
  
  getReviewStartTime(): Date | null {
      return this._fields['reviewStartTime'] ?? null;
  }

  setReviewStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['reviewStartTime'] = value;

    return this;
  }

  get reviewTime(): Date | null {
    return this._fields['reviewTime'] ?? null;
  }
  
  getReviewTime(): Date | null {
      return this._fields['reviewTime'] ?? null;
  }

  setReviewTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['reviewTime'] = value;

    return this;
  }

  get priority(): string | null {
    return this._fields['priority'] ?? null;
  }
  
  getPriority(): string | null {
      return this._fields['priority'] ?? null;
  }

  setPriority(value: null | string) {
    this._fields['priority'] = value;

    return this;
  }

  get source(): string | null {
    return this._fields['source'] ?? null;
  }
  
  getSource(): string | null {
      return this._fields['source'] ?? null;
  }

  setSource(value: null | string) {
    this._fields['source'] = value;

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

  get customer(): AmlCheckCustomer | null {
    return this._fields['customer'] ?? null;
  }
  
  getCustomer(): AmlCheckCustomer | null {
      return this._fields['customer'] ?? null;
  }

  setCustomer(value: null | AmlCheckCustomer | any) {
    if (value !== null && !(value instanceof AmlCheckCustomer)) {
      value = new AmlCheckCustomer(value);
    }

    this._fields['customer'] = value;

    return this;
  }

  get hits(): Array<any> | null {
    return this._fields['hits'] ?? null;
  }
  
  getHits(): Array<any> | null {
      return this._fields['hits'] ?? null;
  }

  setHits(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof AML ? value : new AML(value),
    ) : null;

    this._fields['hits'] = value;

    return this;
  }

  get tags(): Array<any> | null {
    return this._fields['tags'] ?? null;
  }
  
  getTags(): Array<any> | null {
      return this._fields['tags'] ?? null;
  }

  private setTags(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Tag ? value : new Tag(value),
    ) : null;

    this._fields['tags'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewerId')) {
      data['reviewerId'] = this['reviewerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewerName')) {
      data['reviewerName'] = this['reviewerName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewStartTime')) {
      data['reviewStartTime'] = this['reviewStartTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewTime')) {
      data['reviewTime'] = this['reviewTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'priority')) {
      data['priority'] = this['priority'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'source')) {
      data['source'] = this['source'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hits')) {
      data['hits'] = this['hits'] !== null
          ? this._fields['hits'].map((aML: AML) => aML.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'] !== null
          ? this._fields['tags'].map((tag: Tag) => tag.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
