
export default class ParamountCommerceCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'appId')) {
      this.setAppId(data['appId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientSecret')) {
      this.setClientSecret(data['clientSecret']);
    }
  }


  get merchantId(): string {
    return this._fields['merchantId'];
  }
  
  getMerchantId(): string {
      return this._fields['merchantId'];
  }

  setMerchantId(value: string) {
    this._fields['merchantId'] = value;

    return this;
  }

  get appId(): string {
    return this._fields['appId'];
  }
  
  getAppId(): string {
      return this._fields['appId'];
  }

  setAppId(value: string) {
    this._fields['appId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'appId')) {
      data['appId'] = this['appId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientSecret')) {
      data['clientSecret'] = this['clientSecret'];
    }

    return data;
  }
}
