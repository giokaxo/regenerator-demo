import ResourceLink from '../models/resource-link';

export default class AuthenticationOptions {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'passwordPattern')) {
      this.setPasswordPattern(data['passwordPattern']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialTtl')) {
      this.setCredentialTtl(data['credentialTtl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authTokenTtl')) {
      this.setAuthTokenTtl(data['authTokenTtl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resetTokenTtl')) {
      this.setResetTokenTtl(data['resetTokenTtl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'otpRequired')) {
      this.setOtpRequired(data['otpRequired']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get passwordPattern(): string | null {
    return this._fields['passwordPattern'] ?? null;
  }
  
  getPasswordPattern(): string | null {
      return this._fields['passwordPattern'] ?? null;
  }

  setPasswordPattern(value: null | string) {
    this._fields['passwordPattern'] = value;

    return this;
  }

  get credentialTtl(): number | null {
    return this._fields['credentialTtl'] ?? null;
  }
  
  getCredentialTtl(): number | null {
      return this._fields['credentialTtl'] ?? null;
  }

  setCredentialTtl(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['credentialTtl'] = value;

    return this;
  }

  get authTokenTtl(): number | null {
    return this._fields['authTokenTtl'] ?? null;
  }
  
  getAuthTokenTtl(): number | null {
      return this._fields['authTokenTtl'] ?? null;
  }

  setAuthTokenTtl(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['authTokenTtl'] = value;

    return this;
  }

  get resetTokenTtl(): number | null {
    return this._fields['resetTokenTtl'] ?? null;
  }
  
  getResetTokenTtl(): number | null {
      return this._fields['resetTokenTtl'] ?? null;
  }

  setResetTokenTtl(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['resetTokenTtl'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'passwordPattern')) {
      data['passwordPattern'] = this['passwordPattern'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialTtl')) {
      data['credentialTtl'] = this['credentialTtl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authTokenTtl')) {
      data['authTokenTtl'] = this['authTokenTtl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resetTokenTtl')) {
      data['resetTokenTtl'] = this['resetTokenTtl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'otpRequired')) {
      data['otpRequired'] = this['otpRequired'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}
