
export default class PayUCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantKey')) {
      this.setMerchantKey(data['merchantKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSalt')) {
      this.setMerchantSalt(data['merchantSalt']);
    }
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

  get merchantSalt(): string {
    return this._fields['merchantSalt'];
  }
  
  getMerchantSalt(): string {
      return this._fields['merchantSalt'];
  }

  setMerchantSalt(value: string) {
    this._fields['merchantSalt'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantKey')) {
      data['merchantKey'] = this['merchantKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSalt')) {
      data['merchantSalt'] = this['merchantSalt'];
    }

    return data;
  }
}
