import { ServiceCredential } from '../models/service-credential';
import ResourceLink from '../models/resource-link';

export default class OAuth2Credential implements ServiceCredential {
  get [ServiceCredential](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_DEACTIVATED = 'deactivated';

  SERVICE_GOOGLE_SHEETS = 'google-sheets';

  SERVICE_KEAP_INFUSIONSOFT = 'keap-infusionsoft';

  SERVICE_INTUIT_QUICKBOOKS = 'intuit-quickbooks';

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
    if (Object.prototype.hasOwnProperty.call(data, 'service')) {
      this.setService(data['service']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'code')) {
      this.setCode(data['code']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessToken')) {
      this.setAccessToken(data['accessToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refreshToken')) {
      this.setRefreshToken(data['refreshToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'scopes')) {
      this.setScopes(data['scopes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  public get type() {
    return 'oauth2';
  }

  public getType() {
    return 'oauth2';
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

  get service(): string {
    return this._fields['service'];
  }
  
  getService(): string {
      return this._fields['service'];
  }

  setService(value: string) {
    this._fields['service'] = value;

    return this;
  }

  get code(): string {
    return this._fields['code'];
  }
  
  getCode(): string {
      return this._fields['code'];
  }

  setCode(value: string) {
    this._fields['code'] = value;

    return this;
  }

  get accessToken(): string | null {
    return this._fields['accessToken'] ?? null;
  }
  
  getAccessToken(): string | null {
      return this._fields['accessToken'] ?? null;
  }

  private setAccessToken(value: null | string) {
    this._fields['accessToken'] = value;

    return this;
  }

  get refreshToken(): string | null {
    return this._fields['refreshToken'] ?? null;
  }
  
  getRefreshToken(): string | null {
      return this._fields['refreshToken'] ?? null;
  }

  private setRefreshToken(value: null | string) {
    this._fields['refreshToken'] = value;

    return this;
  }

  get scopes(): Array<any> {
    return this._fields['scopes'];
  }
  
  getScopes(): Array<any> {
      return this._fields['scopes'];
  }

  setScopes(value: Array<any>) {
    this._fields['scopes'] = value;

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
      type: 'oauth2',
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'service')) {
      data['service'] = this['service'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'code')) {
      data['code'] = this['code'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessToken')) {
      data['accessToken'] = this['accessToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refreshToken')) {
      data['refreshToken'] = this['refreshToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scopes')) {
      data['scopes'] = this['scopes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
