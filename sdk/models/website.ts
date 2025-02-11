import WebsiteSettings from '../models/website-settings';
import ResourceLink from '../models/resource-link';

export default class Website {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'servicePhone')) {
      this.setServicePhone(data['servicePhone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'serviceEmail')) {
      this.setServiceEmail(data['serviceEmail']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'logoId')) {
      this.setLogoId(data['logoId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'logoUrl')) {
      this.setLogoUrl(data['logoUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
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

  get url(): string {
    return this._fields['url'];
  }
  
  getUrl(): string {
      return this._fields['url'];
  }

  setUrl(value: string) {
    this._fields['url'] = value;

    return this;
  }

  get servicePhone(): string {
    return this._fields['servicePhone'];
  }
  
  getServicePhone(): string {
      return this._fields['servicePhone'];
  }

  setServicePhone(value: string) {
    this._fields['servicePhone'] = value;

    return this;
  }

  get serviceEmail(): string {
    return this._fields['serviceEmail'];
  }
  
  getServiceEmail(): string {
      return this._fields['serviceEmail'];
  }

  setServiceEmail(value: string) {
    this._fields['serviceEmail'] = value;

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

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

    return this;
  }

  get settings(): WebsiteSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): WebsiteSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | WebsiteSettings | any) {
    if (value !== null && !(value instanceof WebsiteSettings)) {
      value = new WebsiteSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  get logoId(): string | null {
    return this._fields['logoId'] ?? null;
  }
  
  getLogoId(): string | null {
      return this._fields['logoId'] ?? null;
  }

  setLogoId(value: null | string) {
    this._fields['logoId'] = value;

    return this;
  }

  get logoUrl(): string | null {
    return this._fields['logoUrl'] ?? null;
  }
  
  getLogoUrl(): string | null {
      return this._fields['logoUrl'] ?? null;
  }

  private setLogoUrl(value: null | string) {
    this._fields['logoUrl'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  private setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'servicePhone')) {
      data['servicePhone'] = this['servicePhone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'serviceEmail')) {
      data['serviceEmail'] = this['serviceEmail'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoId')) {
      data['logoId'] = this['logoId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoUrl')) {
      data['logoUrl'] = this['logoUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
