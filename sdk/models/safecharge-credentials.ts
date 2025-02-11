
export default class SafechargeCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'siteId')) {
      this.setSiteId(data['siteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
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

  get siteId(): string {
    return this._fields['siteId'];
  }
  
  getSiteId(): string {
      return this._fields['siteId'];
  }

  setSiteId(value: string) {
    this._fields['siteId'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'siteId')) {
      data['siteId'] = this['siteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}
