
export default class PayeezyCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantToken')) {
      this.setMerchantToken(data['merchantToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecret')) {
      this.setApiSecret(data['apiSecret']);
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

  get merchantToken(): string {
    return this._fields['merchantToken'];
  }
  
  getMerchantToken(): string {
      return this._fields['merchantToken'];
  }

  setMerchantToken(value: string) {
    this._fields['merchantToken'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantToken')) {
      data['merchantToken'] = this['merchantToken'];
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
