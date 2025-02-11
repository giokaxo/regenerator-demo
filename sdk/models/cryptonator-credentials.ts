
export default class CryptonatorCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchant_id')) {
      this.setMerchantId(data['merchant_id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret')) {
      this.setSecret(data['secret']);
    }
  }


  get merchantId(): string {
    return this._fields['merchant_id'];
  }
  
  getMerchantId(): string {
      return this._fields['merchant_id'];
  }

  setMerchantId(value: string) {
    this._fields['merchant_id'] = value;

    return this;
  }

  get secret(): string {
    return this._fields['secret'];
  }
  
  getSecret(): string {
      return this._fields['secret'];
  }

  setSecret(value: string) {
    this._fields['secret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchant_id'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secret')) {
      data['secret'] = this['secret'];
    }

    return data;
  }
}
