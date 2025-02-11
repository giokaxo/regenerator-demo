
export default class Pay4FunCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSecret')) {
      this.setMerchantSecret(data['merchantSecret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantKey')) {
      this.setMerchantKey(data['merchantKey']);
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

  get merchantSecret(): string {
    return this._fields['merchantSecret'];
  }
  
  getMerchantSecret(): string {
      return this._fields['merchantSecret'];
  }

  setMerchantSecret(value: string) {
    this._fields['merchantSecret'] = value;

    return this;
  }

  get merchantKey(): string {
    return this._fields['merchantKey'];
  }
  
  getMerchantKey(): string {
      return this._fields['merchantKey'];
  }

  setMerchantKey(value: string) {
    this._fields['merchantKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSecret')) {
      data['merchantSecret'] = this['merchantSecret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantKey')) {
      data['merchantKey'] = this['merchantKey'];
    }

    return data;
  }
}
