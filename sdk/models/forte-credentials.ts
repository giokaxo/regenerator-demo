
export default class ForteCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'locationId')) {
      this.setLocationId(data['locationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiAccessId')) {
      this.setApiAccessId(data['apiAccessId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecretKey')) {
      this.setApiSecretKey(data['apiSecretKey']);
    }
  }


  get accountId(): string {
    return this._fields['accountId'];
  }
  
  getAccountId(): string {
      return this._fields['accountId'];
  }

  setAccountId(value: string) {
    this._fields['accountId'] = value;

    return this;
  }

  get locationId(): string {
    return this._fields['locationId'];
  }
  
  getLocationId(): string {
      return this._fields['locationId'];
  }

  setLocationId(value: string) {
    this._fields['locationId'] = value;

    return this;
  }

  get apiAccessId(): string {
    return this._fields['apiAccessId'];
  }
  
  getApiAccessId(): string {
      return this._fields['apiAccessId'];
  }

  setApiAccessId(value: string) {
    this._fields['apiAccessId'] = value;

    return this;
  }

  get apiSecretKey(): string {
    return this._fields['apiSecretKey'];
  }
  
  getApiSecretKey(): string {
      return this._fields['apiSecretKey'];
  }

  setApiSecretKey(value: string) {
    this._fields['apiSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locationId')) {
      data['locationId'] = this['locationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiAccessId')) {
      data['apiAccessId'] = this['apiAccessId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecretKey')) {
      data['apiSecretKey'] = this['apiSecretKey'];
    }

    return data;
  }
}
