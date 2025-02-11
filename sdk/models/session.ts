import ResourceLink from '../models/resource-link';

export default class Session {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'permissions')) {
      this.setPermissions(data['permissions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expiredTime')) {
      this.setExpiredTime(data['expiredTime']);
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

  get token(): string | null {
    return this._fields['token'] ?? null;
  }
  
  getToken(): string | null {
      return this._fields['token'] ?? null;
  }

  setToken(value: null | string) {
    this._fields['token'] = value;

    return this;
  }

  get permissions(): Array<any> {
    return this._fields['permissions'];
  }
  
  getPermissions(): Array<any> {
      return this._fields['permissions'];
  }

  setPermissions(value: Array<any>) {
    this._fields['permissions'] = value;

    return this;
  }

  get userId(): string | null {
    return this._fields['userId'] ?? null;
  }
  
  getUserId(): string | null {
      return this._fields['userId'] ?? null;
  }

  private setUserId(value: null | string) {
    this._fields['userId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'permissions')) {
      data['permissions'] = this['permissions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expiredTime')) {
      data['expiredTime'] = this['expiredTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
