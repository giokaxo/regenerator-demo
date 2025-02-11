
export default class CayanCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSiteId')) {
      this.setMerchantSiteId(data['merchantSiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantKey')) {
      this.setMerchantKey(data['merchantKey']);
    }
  }


  get merchantSiteId(): string {
    return this._fields['merchantSiteId'];
  }
  
  getMerchantSiteId(): string {
      return this._fields['merchantSiteId'];
  }

  setMerchantSiteId(value: string) {
    this._fields['merchantSiteId'] = value;

    return this;
  }

  get merchantName(): string {
    return this._fields['merchantName'];
  }
  
  getMerchantName(): string {
      return this._fields['merchantName'];
  }

  setMerchantName(value: string) {
    this._fields['merchantName'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSiteId')) {
      data['merchantSiteId'] = this['merchantSiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantKey')) {
      data['merchantKey'] = this['merchantKey'];
    }

    return data;
  }
}
