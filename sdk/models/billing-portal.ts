import BillingPortalFeatures from '../models/billing-portal-features';
import BillingPortalCustomization from '../models/billing-portal-customization';
import ResourceLink from '../models/resource-link';

export default class BillingPortal {
  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'slug')) {
      this.setSlug(data['slug']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customDomain')) {
      this.setCustomDomain(data['customDomain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'features')) {
      this.setFeatures(data['features']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customization')) {
      this.setCustomization(data['customization']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
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

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get slug(): string {
    return this._fields['slug'];
  }
  
  getSlug(): string {
      return this._fields['slug'];
  }

  setSlug(value: string) {
    this._fields['slug'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get customDomain(): string | null {
    return this._fields['customDomain'] ?? null;
  }
  
  getCustomDomain(): string | null {
      return this._fields['customDomain'] ?? null;
  }

  setCustomDomain(value: null | string) {
    this._fields['customDomain'] = value;

    return this;
  }

  get features(): BillingPortalFeatures | null {
    return this._fields['features'] ?? null;
  }
  
  getFeatures(): BillingPortalFeatures | null {
      return this._fields['features'] ?? null;
  }

  setFeatures(value: null | BillingPortalFeatures | any) {
    if (value !== null && !(value instanceof BillingPortalFeatures)) {
      value = new BillingPortalFeatures(value);
    }

    this._fields['features'] = value;

    return this;
  }

  get customization(): BillingPortalCustomization | null {
    return this._fields['customization'] ?? null;
  }
  
  getCustomization(): BillingPortalCustomization | null {
      return this._fields['customization'] ?? null;
  }

  setCustomization(value: null | BillingPortalCustomization | any) {
    if (value !== null && !(value instanceof BillingPortalCustomization)) {
      value = new BillingPortalCustomization(value);
    }

    this._fields['customization'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'slug')) {
      data['slug'] = this['slug'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customDomain')) {
      data['customDomain'] = this['customDomain'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'features')) {
      data['features'] = this['features']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customization')) {
      data['customization'] = this['customization']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
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
