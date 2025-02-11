
export default class GooneyCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiUser')) {
      this.setApiUser(data['apiUser']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiPassword')) {
      this.setApiPassword(data['apiPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecret')) {
      this.setApiSecret(data['apiSecret']);
    }
  }


  get apiUser(): string | null {
    return this._fields['apiUser'] ?? null;
  }
  
  getApiUser(): string | null {
      return this._fields['apiUser'] ?? null;
  }

  setApiUser(value: null | string) {
    this._fields['apiUser'] = value;

    return this;
  }

  get apiPassword(): string | null {
    return this._fields['apiPassword'] ?? null;
  }
  
  getApiPassword(): string | null {
      return this._fields['apiPassword'] ?? null;
  }

  setApiPassword(value: null | string) {
    this._fields['apiPassword'] = value;

    return this;
  }

  get apiKey(): string {
    return this._fields['apiKey'];
  }
  
  getApiKey(): string {
      return this._fields['apiKey'];
  }

  setApiKey(value: string) {
    this._fields['apiKey'] = value;

    return this;
  }

  get apiSecret(): string {
    return this._fields['apiSecret'];
  }
  
  getApiSecret(): string {
      return this._fields['apiSecret'];
  }

  setApiSecret(value: string) {
    this._fields['apiSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiUser')) {
      data['apiUser'] = this['apiUser'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiPassword')) {
      data['apiPassword'] = this['apiPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecret')) {
      data['apiSecret'] = this['apiSecret'];
    }

    return data;
  }
}
