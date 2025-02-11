
export default class PayRedeemCredentials {
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
  }


  get apiUser(): string {
    return this._fields['apiUser'];
  }
  
  getApiUser(): string {
      return this._fields['apiUser'];
  }

  setApiUser(value: string) {
    this._fields['apiUser'] = value;

    return this;
  }

  get apiPassword(): string {
    return this._fields['apiPassword'];
  }
  
  getApiPassword(): string {
      return this._fields['apiPassword'];
  }

  setApiPassword(value: string) {
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

    return data;
  }
}
