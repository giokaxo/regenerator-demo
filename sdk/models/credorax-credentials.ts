
export default class CredoraxCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantMd5Signature')) {
      this.setMerchantMd5Signature(data['merchantMd5Signature']);
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

  get merchantMd5Signature(): string {
    return this._fields['merchantMd5Signature'];
  }
  
  getMerchantMd5Signature(): string {
      return this._fields['merchantMd5Signature'];
  }

  setMerchantMd5Signature(value: string) {
    this._fields['merchantMd5Signature'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantMd5Signature')) {
      data['merchantMd5Signature'] = this['merchantMd5Signature'];
    }

    return data;
  }
}
