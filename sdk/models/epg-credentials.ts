
export default class EPGCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPassword')) {
      this.setMerchantPassword(data['merchantPassword']);
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

  get productId(): string {
    return this._fields['productId'];
  }
  
  getProductId(): string {
      return this._fields['productId'];
  }

  setProductId(value: string) {
    this._fields['productId'] = value;

    return this;
  }

  get merchantPassword(): string {
    return this._fields['merchantPassword'];
  }
  
  getMerchantPassword(): string {
      return this._fields['merchantPassword'];
  }

  setMerchantPassword(value: string) {
    this._fields['merchantPassword'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['merchantPassword'] = this['merchantPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantKey')) {
      data['merchantKey'] = this['merchantKey'];
    }

    return data;
  }
}
