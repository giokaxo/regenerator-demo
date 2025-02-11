import { ServiceCredential } from '../models/service-credential';
import ResourceLink from '../models/resource-link';

export default class PlaidCredential implements ServiceCredential {
  get [ServiceCredential](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_DEACTIVATED = 'deactivated';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hash')) {
      this.setHash(data['hash']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deactivationTime')) {
      this.setDeactivationTime(data['deactivationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretToken')) {
      this.setSecretToken(data['secretToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useStripe')) {
      this.setUseStripe(data['useStripe']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  public get type() {
    return 'plaid';
  }

  public getType() {
    return 'plaid';
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

  get hash(): string | null {
    return this._fields['hash'] ?? null;
  }
  
  getHash(): string | null {
      return this._fields['hash'] ?? null;
  }

  private setHash(value: null | string) {
    this._fields['hash'] = value;

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

  get deactivationTime(): Date | null {
    return this._fields['deactivationTime'] ?? null;
  }
  
  getDeactivationTime(): Date | null {
      return this._fields['deactivationTime'] ?? null;
  }

  private setDeactivationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['deactivationTime'] = value;

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

  get clientId(): string {
    return this._fields['clientId'];
  }
  
  getClientId(): string {
      return this._fields['clientId'];
  }

  setClientId(value: string) {
    this._fields['clientId'] = value;

    return this;
  }

  get secretToken(): string {
    return this._fields['secretToken'];
  }
  
  getSecretToken(): string {
      return this._fields['secretToken'];
  }

  setSecretToken(value: string) {
    this._fields['secretToken'] = value;

    return this;
  }

  get useStripe(): boolean | null {
    return this._fields['useStripe'] ?? null;
  }
  
  getUseStripe(): boolean | null {
      return this._fields['useStripe'] ?? null;
  }

  setUseStripe(value: null | boolean) {
    this._fields['useStripe'] = value;

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
    const data: Record<string, any> = {
      type: 'plaid',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hash')) {
      data['hash'] = this['hash'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deactivationTime')) {
      data['deactivationTime'] = this['deactivationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretToken')) {
      data['secretToken'] = this['secretToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useStripe')) {
      data['useStripe'] = this['useStripe'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
