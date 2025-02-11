import ResourceLink from '../models/resource-link';

export default class AuthenticationTokenResponse {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'otpRequired')) {
      this.setOtpRequired(data['otpRequired']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialId')) {
      this.setCredentialId(data['credentialId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expiredTime')) {
      this.setExpiredTime(data['expiredTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get username(): string {
    return this._fields['username'];
  }
  
  getUsername(): string {
      return this._fields['username'];
  }

  setUsername(value: string) {
    this._fields['username'] = value;

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

  get otpRequired(): boolean | null {
    return this._fields['otpRequired'] ?? null;
  }
  
  getOtpRequired(): boolean | null {
      return this._fields['otpRequired'] ?? null;
  }

  setOtpRequired(value: null | boolean) {
    this._fields['otpRequired'] = value;

    return this;
  }

  get credentialId(): string | null {
    return this._fields['credentialId'] ?? null;
  }
  
  getCredentialId(): string | null {
      return this._fields['credentialId'] ?? null;
  }

  private setCredentialId(value: null | string) {
    this._fields['credentialId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'otpRequired')) {
      data['otpRequired'] = this['otpRequired'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialId')) {
      data['credentialId'] = this['credentialId'];
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
