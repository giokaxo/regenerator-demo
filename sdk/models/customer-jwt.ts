import Acl from '../models/acl';
import ResourceLink from '../models/resource-link';

export default class CustomerJWT {
  TYPE_CUSTOMER = 'customer';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invalidate')) {
      this.setInvalidate(data['invalidate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'oneTimePassword')) {
      this.setOneTimePassword(data['oneTimePassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acl')) {
      this.setAcl(data['acl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customClaims')) {
      this.setCustomClaims(data['customClaims']);
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

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

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

  get invalidate(): boolean | null {
    return this._fields['invalidate'] ?? null;
  }
  
  getInvalidate(): boolean | null {
      return this._fields['invalidate'] ?? null;
  }

  setInvalidate(value: null | boolean) {
    this._fields['invalidate'] = value;

    return this;
  }

  get oneTimePassword(): string | null {
    return this._fields['oneTimePassword'] ?? null;
  }
  
  getOneTimePassword(): string | null {
      return this._fields['oneTimePassword'] ?? null;
  }

  setOneTimePassword(value: null | string) {
    this._fields['oneTimePassword'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  private setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get acl(): Array<any> | null {
    return this._fields['acl'] ?? null;
  }
  
  getAcl(): Array<any> | null {
      return this._fields['acl'] ?? null;
  }

  setAcl(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Acl ? value : new Acl(value),
    ) : null;

    this._fields['acl'] = value;

    return this;
  }

  get customClaims(): Record<string, any> | null {
    return this._fields['customClaims'] ?? null;
  }
  
  getCustomClaims(): Record<string, any> | null {
      return this._fields['customClaims'] ?? null;
  }

  setCustomClaims(value: null | Record<string, any>) {
    this._fields['customClaims'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invalidate')) {
      data['invalidate'] = this['invalidate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'oneTimePassword')) {
      data['oneTimePassword'] = this['oneTimePassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acl')) {
      data['acl'] = this['acl'] !== null
          ? this._fields['acl'].map((acl: Acl) => acl.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customClaims')) {
      data['customClaims'] = this['customClaims'];
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
