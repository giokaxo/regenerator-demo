import Acl from '../models/acl';
import ResourceLink from '../models/resource-link';

export default class ApiKey {
  TYPE_SECRET = 'secret';

  TYPE_PUBLISHABLE = 'publishable';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acl')) {
      this.setAcl(data['acl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allowedIps')) {
      this.setAllowedIps(data['allowedIps']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiUser')) {
      this.setApiUser(data['apiUser']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
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

  get description(): string {
    return this._fields['description'];
  }
  
  getDescription(): string {
      return this._fields['description'];
  }

  setDescription(value: string) {
    this._fields['description'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

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

  get allowedIps(): Array<any> | null {
    return this._fields['allowedIps'] ?? null;
  }
  
  getAllowedIps(): Array<any> | null {
      return this._fields['allowedIps'] ?? null;
  }

  setAllowedIps(value: null | Array<any>) {
    this._fields['allowedIps'] = value;

    return this;
  }

  get apiUser(): string | null {
    return this._fields['apiUser'] ?? null;
  }
  
  getApiUser(): string | null {
      return this._fields['apiUser'] ?? null;
  }

  private setApiUser(value: null | string) {
    this._fields['apiUser'] = value;

    return this;
  }

  get secretKey(): string | null {
    return this._fields['secretKey'] ?? null;
  }
  
  getSecretKey(): string | null {
      return this._fields['secretKey'] ?? null;
  }

  private setSecretKey(value: null | string) {
    this._fields['secretKey'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acl')) {
      data['acl'] = this['acl'] !== null
          ? this._fields['acl'].map((acl: Acl) => acl.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allowedIps')) {
      data['allowedIps'] = this['allowedIps'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiUser')) {
      data['apiUser'] = this['apiUser'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
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
