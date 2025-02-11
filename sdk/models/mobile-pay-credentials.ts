
export default class MobilePayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSerialNumber')) {
      this.setMerchantSerialNumber(data['merchantSerialNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionKey')) {
      this.setSubscriptionKey(data['subscriptionKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientSecret')) {
      this.setClientSecret(data['clientSecret']);
    }
  }


  get merchantSerialNumber(): string {
    return this._fields['merchantSerialNumber'];
  }
  
  getMerchantSerialNumber(): string {
      return this._fields['merchantSerialNumber'];
  }

  setMerchantSerialNumber(value: string) {
    this._fields['merchantSerialNumber'] = value;

    return this;
  }

  get subscriptionKey(): string {
    return this._fields['subscriptionKey'];
  }
  
  getSubscriptionKey(): string {
      return this._fields['subscriptionKey'];
  }

  setSubscriptionKey(value: string) {
    this._fields['subscriptionKey'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSerialNumber')) {
      data['merchantSerialNumber'] = this['merchantSerialNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionKey')) {
      data['subscriptionKey'] = this['subscriptionKey'];
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
