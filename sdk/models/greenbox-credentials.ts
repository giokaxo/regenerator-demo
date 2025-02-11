
export default class GreenboxCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'locationId')) {
      this.setLocationId(data['locationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientSecret')) {
      this.setClientSecret(data['clientSecret']);
    }
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

  get clientSecret(): string {
    return this._fields['clientSecret'];
  }
  
  getClientSecret(): string {
      return this._fields['clientSecret'];
  }

  setClientSecret(value: string) {
    this._fields['clientSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locationId')) {
      data['locationId'] = this['locationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientSecret')) {
      data['clientSecret'] = this['clientSecret'];
    }

    return data;
  }
}
