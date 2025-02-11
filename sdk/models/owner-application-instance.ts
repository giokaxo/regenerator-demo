import ResourceLink from '../models/resource-link';

export default class OwnerApplicationInstance {
  STATUS_ENABLING = 'enabling';

  STATUS_ENABLED = 'enabled';

  STATUS_DISABLING = 'disabling';

  STATUS_DISABLED = 'disabled';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isConfigured')) {
      this.setIsConfigured(data['isConfigured']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
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

  get isConfigured(): boolean | null {
    return this._fields['isConfigured'] ?? null;
  }
  
  getIsConfigured(): boolean | null {
      return this._fields['isConfigured'] ?? null;
  }

  private setIsConfigured(value: null | boolean) {
    this._fields['isConfigured'] = value;

    return this;
  }

  get settings(): Record<string, any> | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): Record<string, any> | null {
      return this._fields['settings'] ?? null;
  }

  private setSettings(value: null | Record<string, any>) {
    this._fields['settings'] = value;

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

  get token(): string | null {
    return this._fields['token'] ?? null;
  }
  
  getToken(): string | null {
      return this._fields['token'] ?? null;
  }

  private setToken(value: null | string) {
    this._fields['token'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isConfigured')) {
      data['isConfigured'] = this['isConfigured'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }

    return data;
  }
}
